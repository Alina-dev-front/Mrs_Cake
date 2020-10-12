using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using Mrs_Cake.Models;

namespace Mrs_Cake.MrsCakeData
{
    public class DataHelpers
    {
        public static void NewDbWhitSeed()
        {
            Database.SetInitializer(new DropCreateDatabaseAlways<MrsCakeDbContext>());
            using (var context = new MrsCakeDbContext())
            {
                if (context.Users.Any()){
                    return;
                }
                var user1 = context.Users.Add(new User { FirstName = "Parul" });
                var user2 = context.Users.Add(new User { FirstName = "Narrerat" });
                var user3 = context.Users.Add(new User { FirstName = "Alina" });
                var user4 = context.Users.Add(new User { FirstName = "Abel" });
            }
        }
    }
}
