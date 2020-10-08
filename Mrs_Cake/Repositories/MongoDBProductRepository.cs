using Mrs_Cake.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using System.IO;
using System.Text;
using Mrs_Cake.MrsCakeData;
using Mrs_Cake.Repositories;

namespace Mrs_Cake.Repositories
{
    /*public class MongoDBProductRepository : IProductRepository
    {
        *//*private IMongoCollection<Product> _collection;

        static IProductRepository productRepository = new MongoDBProductRepository(MongoDbConfigFile.GetDBCollection());
        static List<Product> listFromDB = productRepository.GetAll();

        public MongoDBProductRepository(IMongoCollection<Product> collection)
        {
            _collection = collection;
        }*//*

        public List<Product> GetAll()
        {
            var all = _collection.Find(Builders<Product>.Filter.Empty);
            return all.ToList();
        }

        public Product GetById(long id)
        {
            return _collection.Find(Builders<Product>.Filter.Eq(x => x.Id, id)).FirstOrDefault();
        }

        public void Create(Product product)
        {
            _collection.InsertOne(product);
        }

        public void Update(Product product)
        {
            _collection.ReplaceOne(p => p.Id == product.Id, product);
        }

        public void Delete(Product product)
        {
            _collection.DeleteOne(s => s.Id == product.Id);
        }
    }*/
}
