using System.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Models;
using Mrs_Cake.Interfaces;



namespace Mrs_Cake
{
    public class MrsCakeDbContext : DbContext
    {
      public  DbSet<Bakeries> Bakeries { get; set; }
      public  DbSet<Product> Products { get; set; }
      public  DbSet<Order> Orders { get; set; }
      public  DbSet<User> Users { get; set; }

        //Overriding on crete model so thát is dirty propertie doesn't show in the database, just in the application only
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //here we ingnore is dirty property
            modelBuilder.Types().Configure(c => c.Ignore("IsDirty"));
            base.OnModelCreating(modelBuilder);
        }

        //Overriding saves changes method to always check when a model is created and set a date when its done.
        public override int SaveChanges()
        {
            foreach(var history in this.ChangeTracker.Entries().
                Where(e => e.Entity is ImodifactionHistory && (e.State == EntityState.Added || 
                        e.State == EntityState.Modified))
                .Select(e => e.Entity as ImodifactionHistory)
                )
            {
                history.DateModified = DateTime.Now;
                if(history.DateCreated == DateTime.MinValue)
                {
                    history.DateCreated = DateTime.Now;
                }
            }

            int result = base.SaveChanges();
            foreach(var history in this.ChangeTracker.Entries()
                                       .Where(e => e.Entity is ImodifactionHistory)
                                       .Select(e => e.Entity as ImodifactionHistory)
                )
            {
                history.IsDirty = false;
            }
            return result;
        }
    }
}

