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
        public User ForgotPassword(string inputEmail)
        {
            List<User> usersFromDB = _users.Find(user => true).ToList();

            User result = usersFromDB.Find(user => user.Email == inputEmail);
            if (result != null)
            {
                
                    result.PasswordStatus = "Reset password required";
                    return result;
                }
               
            
            return null;
        }
    

public void Update(string id, User user) =>

            _users.ReplaceOne(user => user.Id == id, user);

        public void Remove(User userIn) =>
            _users.DeleteOne(user => user.Id == userIn.Id);

        public void Remove(string id) =>
            _users.DeleteOne(user => user.Id == id);
    }
}
