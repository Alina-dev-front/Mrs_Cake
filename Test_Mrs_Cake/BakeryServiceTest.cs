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
            string testGetById = "5fb67c4a7db76a339046b22c";
            Bakery bakeryFromDB = _bakeryService.GetById(testGetById);
            Bakery expectedBakery = new Bakery();
            expectedBakery.Id = testGetById;
            expectedBakery.Name = "Sweet Life";
            expectedBakery.Address = "Sweden, Gothenburg, Vasastan, 51a";
            expectedBakery.Email = "sweet_life@gmail.com";
            expectedBakery.Phone = "468822011771";
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
        [Fact]
        public void UpdateBakeryInTestDB()
        {
            string updateTestId = "5fb67c4a7db76a339046b22b";
            Bakery bakeryFromDB = _bakeryService.GetById(updateTestId);
            Bakery BakeryWithNewData = new Bakery();
            BakeryWithNewData.Id = bakeryFromDB.Id;
            BakeryWithNewData.Name = "Update bakery "+ bakeryFromDB.Name;
            BakeryWithNewData.Address = "Malmo";
            BakeryWithNewData.Email = bakeryFromDB.Email;
            BakeryWithNewData.Phone = bakeryFromDB.Phone;
            _bakeryService.Update(updateTestId, BakeryWithNewData);
            Bakery updatedBakery = _bakeryService.GetById(BakeryWithNewData.Id);
            Assert.Equal(BakeryWithNewData.Name, updatedBakery.Name);
        }
        [Fact]
        public void DeleteBakeryInTestDB()
        {
            Bakery testBakery = new Bakery();
            testBakery.Name = "TO DELETE";
            testBakery.Address = "Gothenburg";
            testBakery.Email = "Parul@gmail.com";
            testBakery.Phone = "111111";
            _bakeryService.Create(testBakery);
            Bakery testbakeryFromDB = _bakeryService.GetById(testBakery.Id);
            _bakeryService.Remove(testbakeryFromDB);
            Assert.DoesNotContain(testbakeryFromDB, _bakeryService.Get());
        }
    }
}

    
