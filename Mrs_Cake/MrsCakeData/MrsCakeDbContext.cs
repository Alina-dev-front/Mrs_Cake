using System.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Models;



namespace Mrs_Cake
{
    public class MrsCakeDbContext : DbContext
    {
        DbSet<Bakeries> Bakeries { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<User> Users { get; set; }
    }
}

