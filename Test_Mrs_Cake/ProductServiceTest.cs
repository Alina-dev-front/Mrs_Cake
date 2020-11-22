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
        private readonly ProductService _productService;

        public ProductServiceTest()
        {
            IMrsCakeDatabaseSettings settings = new MrsCakeDatabaseSettings();
            settings.ConnectionString = "mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority";
            settings.DatabaseName = "Mrs_Cake_Test";
            settings.CollectionName_Products = "Product_Test";

            _productService = new ProductService(settings);
        }

        [Fact]
        public void CountProductsInDb()
        {
            List<Product> testList = _productService.Get();

            int numberOfProductsInTestDB = 18;
            
            Assert.Equal(numberOfProductsInTestDB, testList.Count);
        }

        [Fact]
        public void GetProductById()
        {
            string testGetById = "5fb2919e77c714150c947f20";

            Product productFromDB = _productService.GetById(testGetById);

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

            _productService.Create(testProduct);

            Product productFromDB = _productService.GetById(testProduct.Id);

            Assert.Equal(testProduct.Name, productFromDB.Name);
        }


        [Fact]
        public void UpdateProductInTestDB()
        {
            string updateTestId = "5fb2919e77c714150c947f2f";

            Product productFromDB = _productService.GetById(updateTestId);

            Product productWithNewData = new Product();
            productWithNewData.Id = productFromDB.Id;
            productWithNewData.Name = "Updated Product " + productFromDB.Name ;
            productWithNewData.ProductType = productFromDB.ProductType;
            productWithNewData.Description = productFromDB.Description;
            productWithNewData.Bakery = productFromDB.Bakery;
            productWithNewData.Price = productFromDB.Price;
            productWithNewData.imageUrl = productFromDB.imageUrl;

            _productService.Update(updateTestId, productWithNewData);

            Product updatedProduct = _productService.GetById(productWithNewData.Id);

            Assert.Equal(productWithNewData.Name, updatedProduct.Name);
        }

        [Fact]
        public void DeleteProductInTestDB()
        {
            Product testProduct = new Product();
            testProduct.Name = "TO DELETE";
            testProduct.ProductType = "Pie";
            testProduct.Bakery = "Good Test";
            testProduct.Description = "Perfectly written test";
            testProduct.Price = 100;
            testProduct.imageUrl = "ProductPage_Cakes/Lala.jpg";

            _productService.Create(testProduct);

            Product productFromDB = _productService.GetById(testProduct.Id);

            _productService.Remove(productFromDB);

            Assert.DoesNotContain(productFromDB, _productService.Get());
        }
    }
}