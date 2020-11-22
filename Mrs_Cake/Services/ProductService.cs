using System.Collections.Generic;
using System.Linq;
using Mrs_Cake.Models;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;

namespace Mrs_Cake.Services
{
    public class ProductService 
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(IMrsCakeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _products = database.GetCollection<Product>(settings.CollectionName_Products);
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

        public void Update(string id, Product product)
        {
            Product foundProduct = _products.Find(n => n.Id == id).FirstOrDefault();
            foundProduct.Name = product.Name;
            foundProduct.Bakery = product.Bakery;
            foundProduct.Description = product.Description;
            foundProduct.Price = product.Price;
            foundProduct.ProductType = product.ProductType;
            foundProduct.imageUrl = product.imageUrl;

            _products.ReplaceOne(product => product.Id == id, foundProduct);
        }

        public void Remove(Product productIn) =>
            _products.DeleteOne(product => product.Id == productIn.Id);

        public void Remove(string id) =>
            _products.DeleteOne(product => product.Id == id);
    }
}
