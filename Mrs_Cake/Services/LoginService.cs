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
            List<User> usersFromDB = _users.Find(user => true).ToList();

            User result = usersFromDB.Find(user => user.Email == inputEmail);
            if(result != null)
            {
                if(result.Password == inputPassword)
                {
                    return  result;
                    
                }
                return null;
            }
            return null;
        }
    }
}
