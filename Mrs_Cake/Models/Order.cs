using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mrs_Cake.Models
{
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public int Number { get; set; }
        public decimal TotalPrice { get; set; }
        public string Address { get; set; }
        public string Comments { get; set; }
        public bool Paid { get; set; }
        public string UserId { get; set; }
        public string DeliveryMethod { get; set; }
        public List<Product> OrderedProducts { get; set; }
    }
}
