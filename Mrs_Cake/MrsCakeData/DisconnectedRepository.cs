using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Models;
using System.Data.Entity;
using System.Collections;

namespace Mrs_Cake.MrsCakeData
{
    //DISCONNECTED REPOSITORY FOR PRODUCTS

    public class DisconnectedRepository
    {
        public List<Product> GetProducts()
        {
            using (var context = new MrsCakeDbContext())
            {
                // AsNoTracking method makes entity framework not to intantiate an object every time that is making a query.
                //Really Important for performance! we don't wanna slow down the system.
                return context.Products.AsNoTracking().ToList();
            }
        }

        public Product GetProductWhitName(long id)
        {
            using (var context = new MrsCakeDbContext())
            {
                return context.Products.AsNoTracking().Include(n => n.Name)
                    .FirstOrDefault(n => n.Id == id);
            }
        }
        
        public Product GetProductWhitPrice(decimal price)
        {
            using (var context = new MrsCakeDbContext())
            {
                return context.Products.AsNoTracking().Include(n => n.Price)
                    .Include(n => n.Name)
                    .FirstOrDefault(n => n.Price == price);
            }
        }

        public IEnumerable GetProductsList()
        {
            using (var context = new MrsCakeDbContext())
            {
                return context.Products.AsNoTracking().OrderBy(c => c.Name)
                    .Select(c => new { c.Decsription, c.Price }).ToList();
            }
        }

        public Product GetProductById(long id)
        {
            using (var context = new MrsCakeDbContext())
            {
                return context.Products.AsNoTracking().SingleOrDefault(n => n.Id == id);
            }
        }

        public void SaveUpdatedProduct(Product product)
        {
            using (var context = new MrsCakeDbContext())
            {
                context.Entry(product).State = EntityState.Modified;
                context.SaveChanges();
            }
        }

        public Product SaveNewProduct(Product product)
        {
            using (var context = new MrsCakeDbContext())
            {
                context.Products.Add(product);
                context.SaveChanges();
                return product;
            }
        }

        public void DeleteProduct(long productId)
        {
            using (var context = new MrsCakeDbContext())
            {
                var product = context.Products.Find(productId);
                context.Entry(product).State = EntityState.Deleted;
                context.SaveChanges();
            }
        }

        }
    }

