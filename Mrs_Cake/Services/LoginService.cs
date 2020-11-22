using System.Collections.Generic;
using System.Linq;
using Mrs_Cake.Models;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;
using System;

namespace Mrs_Cake.Services
{
    public class LoginService
    {
        private readonly IMongoCollection<User> _users;

        public LoginService(IMrsCakeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<User>(settings.CollectionName_Users);
        }

        public List<User> Get()
        {
            return _users.Find(user => true).ToList();
        }


        public User Login(string inputEmail, string inputPassword)
        {
            List<User> usersFromDB = Get();

            User result = usersFromDB.Find(user => user.Email == inputEmail);
            if(result != null)
            {
                return CheckPasswordAndSetLoginStatus(result, inputPassword);
            }
            return null;
        }

        public User CheckPasswordAndSetLoginStatus(User user, string inputPassword)
        {
            if (user.Password == inputPassword)
            {
                user.LoginStatus = "Logged in";
                Update(user.Id, user);
                return user;
            }
            user.LoginStatus = "Invalid password";
            Update(user.Id, user);
            return user;
        }

        public void Update(string id, User user)
        {
            User userToUpdate = _users.Find(n => n.Id == id).FirstOrDefault();
            userToUpdate.FirstName = user.FirstName;
            userToUpdate.LastName = user.LastName;
            userToUpdate.Email = user.Email;
            userToUpdate.Password = user.Password;
            userToUpdate.LoginStatus = user.LoginStatus;

            _users.ReplaceOne(user => user.Id == id, userToUpdate);
        }
    }
}
