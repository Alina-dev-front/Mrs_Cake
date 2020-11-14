using System.Collections.Generic;
using System.Linq;
using Mrs_Cake.Models;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;

namespace Mrs_Cake.Services
{
    public class BakeryService
    {
        private readonly IMongoCollection<Bakery> _bakeries;

        public BakeryService(IMrsCakeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _bakeries = database.GetCollection<Bakery>(settings.CollectionName_Bakeries);
        }

        public List<Bakery> Get() =>
            _bakeries.Find(bakery => true).ToList();

        public Bakery GetById(string id) =>
            _bakeries.Find<Bakery>(bakery => bakery.Id == id).FirstOrDefault();

        public Bakery Create(Bakery bakery)
        {
            _bakeries.InsertOne(bakery);
            return bakery;
        }

        public void Update(string id, Bakery bakery)
        {
            Bakery foundBakery = _bakeries.Find(n => n.Id == id).FirstOrDefault();
            foundBakery.Name = bakery.Name;
            foundBakery.Address = bakery.Address;
           foundBakery.Email = bakery.Email;
            foundBakery.Phone = bakery.Phone;

            _bakeries.ReplaceOne(bakery => bakery.Id == id, foundBakery);
        }

        public void Remove(Bakery bakeryIn) =>
            _bakeries.DeleteOne(bakery => bakery.Id == bakeryIn.Id);

        public void Remove(string id) =>
            _bakeries.DeleteOne(bakery => bakery.Id == id);
    }
}

