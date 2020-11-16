using System;
using System.Collections.Generic;
using Xunit;
using Mrs_Cake.Services;
using Mrs_Cake.Models;
using System.Linq;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;

namespace Test_Mrs_Cake
{
    public class ProductServiceTest
    {
        private readonly IMongoCollection<Product> _products;

        public ProductServiceTest()
        {
            var client = new MongoClient("mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority");
            var database = client.GetDatabase("Mrs_Cake");
            _products = database.GetCollection<Product>("Products_Test");
        }

        [Fact]
        public void CountProductsInDb()
        {
            List<Product> testList = _products.Find(product => true).ToList();

            int numberOfProductsInTestDB = 18;

            Assert.Equal(numberOfProductsInTestDB, testList.Count);
        }
    }
}
