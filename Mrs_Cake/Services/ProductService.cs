using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Models;
using MongoDB.Driver;
using System.IO;
using System.Text;
using Mrs_Cake.MrsCakeData;
using Mrs_Cake.Repositories;

namespace Mrs_Cake.Services
{
    public class ProductService 
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(IMrsCakeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _products = database.GetCollection<Product>(settings.CollectionName);
        }

        public List<Product> Get() =>
            _products.Find(product => true).ToList();

        public Product GetById(string id) =>
            _products.Find<Product>(product => product.Id == id).FirstOrDefault();

        public Product Create(Product product)
        {
            _products.InsertOne(product);
            return product;
        }

        public void Update(string id, Product product) =>
            _products.ReplaceOne(product => product.Id == id, product);

        public void Remove(Product productIn) =>
            _products.DeleteOne(product => product.Id == productIn.Id);

        public void Remove(string id) =>
            _products.DeleteOne(product => product.Id == id);


    }
}
