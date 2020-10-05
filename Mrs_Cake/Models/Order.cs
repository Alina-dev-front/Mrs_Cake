using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Mrs_Cake.Models
{
    public class Order
    {
        public int OrderNumber { get; set; }
        public decimal TotalPrice { get; set; }
        public string Address { get; set; }
        public string Comments { get; set; }
        public bool Paid { get; set; }
        public User User { get; set; }
        public List<Product> OrderedProducts { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
    }
}
