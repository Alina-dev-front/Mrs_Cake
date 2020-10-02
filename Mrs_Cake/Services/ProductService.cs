using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Models;

namespace Mrs_Cake.Services
{
    public class ProductService
    {
        private static List<Product> products = new List<Product>();
        private static long Count = 1;
        private static readonly string[] names = new string[] { "Chocolate Dream", "Maple happiness", "SugarBomb", "Little Girl", "Paula's choice", "Vanila", "Berry cake" };
        private static readonly string[] bakeries = new string[] { "Smith's", "Enjoy!", "MacDonald's edition", "Good morning", "Lilla Italien" };
        private static readonly decimal[] prices = new decimal[] { 356, 115, 974, 451, 321, 456, 671, 1003, 4443 };

        static ProductService()
        {
            Random rnd = new Random();
            for (int i = 0; i < 5; i++)
            {
                Product product = new Product
                {
                    Id = Count++,
                    Name = names[rnd.Next(names.Length)],
                    Bakery = bakeries[rnd.Next(bakeries.Length)],
                    Price = prices[rnd.Next(prices.Length)]
                };
                products.Add(product);
            }
        }
        public List<Product> GetAll()
        {
            return products;
        }
        public Product GetById(int id)
        {
            return products.Where(product => product.Id == id).FirstOrDefault();
        }
        public Product Create(Product product)
        {
            product.Id = Count++;
            products.Add(product);
            return product;
        }
        public void Update(int id, Product product)
        {
            Product found = products.Where(n => n.Id == id).FirstOrDefault();
            found.Name = product.Name;
            found.Bakery = product.Bakery;
            found.Price = product.Price;
        }
        public void Delete(int id)
        {
            products.RemoveAll(n => n.Id == id);
        }
    }
}
