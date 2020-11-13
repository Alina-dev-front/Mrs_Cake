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
        
        [Fact]
        public void CountProductsInDb()
        {
            /*List<Product> result = ProductService.Get();

            Assert.Equal(18, result.Count);*/
        }
    }
}
