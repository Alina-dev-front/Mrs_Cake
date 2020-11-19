using System;
using System.Collections.Generic;
using Xunit;
using Mrs_Cake.Services;
using Mrs_Cake.Models;
using Mrs_Cake.MrsCakeData;
using FluentAssertions;

namespace Test_Mrs_Cake
{
    public class BakeryServiceTest
    {
        private readonly BakeryService _bakeryService;

        public BakeryServiceTest()
        {
            IMrsCakeDatabaseSettings settings = new MrsCakeDatabaseSettings();
            settings.ConnectionString = "mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority";
            settings.DatabaseName = "Mrs_Cake_Test";
            settings.CollectionName_Bakeries = "Bakery_Test";

            _bakeryService = new BakeryService(settings);
        }

        [Fact]
        public void GetBakeryById()
        {
            string testGetById = "5fb6f53924327a507c2178a2";
            Bakery bakeryFromDB = _bakeryService.GetById(testGetById);
            Bakery expectedBakery = new Bakery();
            expectedBakery.Id = testGetById;
            expectedBakery.Name = "Perfect bakery";
            expectedBakery.Address = "Gothenburg";
            expectedBakery.Email = "Parul@gmail.com";
            expectedBakery.Phone = "111111";
            expectedBakery.Should().BeEquivalentTo(bakeryFromDB);
        }
        [Fact]
        public void InsertNewBakeryInTestDB()
        {
            Bakery testBakery = new Bakery();
            testBakery.Name = "Perfect bakery";
            testBakery.Address = "Gothenburg";
            testBakery.Email = "Parul@gmail.com";
            testBakery.Phone = "111111";
            _bakeryService.Create(testBakery);
            Bakery bakeryFromDB = _bakeryService.GetById(testBakery.Id);
            testBakery.Should().BeEquivalentTo(bakeryFromDB);
        }

        [Fact]
        public void CountBakeriesInDb()
        {
            List<Bakery> testList = _bakeryService.Get();
            int numberOfBakeryInTestDB = 4;
            Assert.Equal(numberOfBakeryInTestDB, testList.Count);
        }

        
    }
}

    
