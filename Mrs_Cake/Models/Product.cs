using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Interfaces;

namespace Mrs_Cake.Models 
{
    public class Product : ImodifactionHistory
    {
        public long Id { get; set; }
        public ProductType Types { get; set; }
        public string Name { get; set; }
        public string Bakery { get; set; }
        public string Decsription { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }

        public DateTime DateModified { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsDirty { get; set; }
    }
}
