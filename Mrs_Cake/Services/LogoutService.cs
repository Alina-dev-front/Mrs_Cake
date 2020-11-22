using System.Linq;
using Mrs_Cake.Models;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;

namespace Mrs_Cake.Services
{
    public class LogoutService
    {
        private readonly IMongoCollection<User> _users;

        public LogoutService(IMrsCakeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<User>(settings.CollectionName_Users);
        }

        public void Logout(string id)
        {
            User user = _users.Find(n => n.Id == id).FirstOrDefault();

            user.LoginStatus = "";

            _users.ReplaceOne(user => user.Id == id, user);
        }
    }
}