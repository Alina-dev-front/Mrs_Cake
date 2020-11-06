using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Mrs_Cake.Models
{
    public class Bakery
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
