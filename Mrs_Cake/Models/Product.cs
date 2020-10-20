using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mrs_Cake.Models 
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string ProductType { get; set; }
        public string Name { get; set; }
        public string Bakery { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string imageUrl { get; set; }
    }
}
