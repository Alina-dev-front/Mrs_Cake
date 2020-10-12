<<<<<<< HEAD
﻿using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
=======
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Mrs_Cake.Interfaces;
>>>>>>> master

namespace Mrs_Cake.Models
{
    public class Order : ImodifactionHistory
    {
<<<<<<< HEAD
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public int Number { get; set; }
=======
        public Order()
        {
            OrderedProducts = new List<Product>();
        }
        
        public long Id { get; set; }
        public int OrderNumber { get; set; }
>>>>>>> master
        public decimal TotalPrice { get; set; }
        public string Address { get; set; }
        public string Comments { get; set; }
        public bool Paid { get; set; }
<<<<<<< HEAD
        public string UserId { get; set; }
        public string DeliveryMethod { get; set; }
        public List<Product> OrderedProducts { get; set; } = new List<Product>();
=======
        public User User { get; set; }
        public virtual List<Product> OrderedProducts { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }


        public DateTime DateModified { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsDirty { get; set; }
>>>>>>> master
    }
}
