using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Mrs_Cake.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string MobilePhone { get; set; }
        public string Address { get; set; }
        public string CreditCardNumber { get; set; }
        public string UserRole { get; set; }
        public string LoginStatus { get; set; }
    }
}
