using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mrs_Cake.Models
{
    public class Product
    {
        public long Id { get; set; }
        public ProductType Types { get; set; }
        public string Name { get; set; }
        public string Bakery { get; set; }
        public string Decsription { get; set; }
        public decimal Price { get; set; }
    }
}
