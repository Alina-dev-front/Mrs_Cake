using System.Collections.Generic;
using System.Linq;
using Mrs_Cake.Models;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;

namespace Mrs_Cake.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IMrsCakeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<User>(settings.CollectionName_Users);
        }

        public List<User> Get() =>
            _users.Find(user => true).ToList();

        public User GetById(string id) =>
            _users.Find<User>(user => user.Id == id).FirstOrDefault();

        public User Create(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void Update(string id, User user)
            {
            User foundUser = _users.Find(n => n.Id == id).FirstOrDefault();
            foundUser.FirstName = user.FirstName;
            foundUser.LastName = user.LastName;
            foundUser.Email = user.Email;
            foundUser.Password = user.Password;
            foundUser.Address = user.Address;
            foundUser.MobilePhone = user.MobilePhone;
            foundUser.CreditCardNumber = user.CreditCardNumber;
            foundUser.UserRole = user.UserRole;
            foundUser.LoginStatus = user.LoginStatus;
            _users.ReplaceOne(user => user.Id == id, foundUser);
            }
        public void Remove(User userIn) =>
            _users.DeleteOne(user => user.Id == userIn.Id);

        public void Remove(string id) =>
            _users.DeleteOne(user => user.Id == id);
    }
}
