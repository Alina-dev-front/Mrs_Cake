<<<<<<< HEAD
﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
=======
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Interfaces;
>>>>>>> master

namespace Mrs_Cake.Models 
{
    public class Product : ImodifactionHistory
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Product_Type { get; set; }
        public string Name { get; set; }
        public string Bakery { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }

        public DateTime DateModified { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsDirty { get; set; }
    }
}
