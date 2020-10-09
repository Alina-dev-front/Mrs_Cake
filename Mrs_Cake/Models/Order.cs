using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Mrs_Cake.Interfaces;

namespace Mrs_Cake.Models
{
    public class Order : ImodifactionHistory
    {
        public Order()
        {
            OrderedProducts = new List<Product>();
        }
        
        public long Id { get; set; }
        public int OrderNumber { get; set; }
        public decimal TotalPrice { get; set; }
        public string Address { get; set; }
        public string Comments { get; set; }
        public bool Paid { get; set; }
        public User User { get; set; }
        public virtual List<Product> OrderedProducts { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }


        public DateTime DateModified { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsDirty { get; set; }
    }
}
