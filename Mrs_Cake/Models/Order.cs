using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Mrs_Cake.Models
{
    public class Order
    {
        public int Number { get; set; }
        public List<Product> Products { get; set; }
        public decimal TotalPrice { get; set; }
        public string Address { get; set; }
        public string Comments { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
    }
}
