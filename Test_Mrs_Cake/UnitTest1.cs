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

        string testGetById = "5fb2919e77c714150c947f20";
        [Fact]
        public void GetProductById()
        {
            Product productFromDB = _products.Find<Product>(product => product.Id == testGetById).FirstOrDefault();

            Product expectedProduct = new Product();
            expectedProduct.Id = testGetById;
            expectedProduct.Name = "Belgian Chocolate";
            expectedProduct.ProductType = "Cake";
            expectedProduct.Bakery = "Sweet Life";
            expectedProduct.Description = "Dense sour cream chocolate biscuit sandwiched with delicate sour cream based on aromatic Belgian chocolate";
            expectedProduct.Price = 11;
            expectedProduct.imageUrl = "ProductPage_Cakes/Belgian_Chocolate.jpg";

            Assert.Equal(expectedProduct.Name, productFromDB.Name);
        }

        [Fact]
        public void InsertNewProductInTestDB()
        {
            Product testProduct = new Product();
            testProduct.Name = "Lala";
            testProduct.ProductType = "Pie";
            testProduct.Bakery = "Good Test";
            testProduct.Description = "Perfectly written test";
            testProduct.Price = 100;
            testProduct.imageUrl = "ProductPage_Cakes/Lala.jpg";

            _products.InsertOne(testProduct);

            Product productFromDB = _products.Find<Product>(product => product.Name == testProduct.Name).FirstOrDefault();

            Assert.Equal(testProduct.Name, productFromDB.Name);
        }

        string updateTestId = "5fb2919e77c714150c947f2f";

        [Fact]
        public void UpdateProductInTestDB()
        {
            Product productFromDB = _products.Find<Product>(product => product.Id == updateTestId).FirstOrDefault();

            Product productWithNewData = new Product();
            productWithNewData.Id = productFromDB.Id;
            productWithNewData.Name = "Updated Product " + productFromDB.Name ;
            productWithNewData.ProductType = productFromDB.ProductType;
            productWithNewData.Description = productFromDB.Description;
            productWithNewData.Bakery = productFromDB.Bakery;
            productWithNewData.Price = productFromDB.Price;
            productWithNewData.imageUrl = productFromDB.imageUrl;

            _products.ReplaceOne(product => product.Id == productWithNewData.Id, productWithNewData);

            Product updatedProduct = _products.Find<Product>(product => product.Id == productWithNewData.Id).FirstOrDefault();

            Assert.Equal(productWithNewData.Name, updatedProduct.Name);
        }


    }
}