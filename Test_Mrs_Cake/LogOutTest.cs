using System;
using System.Collections.Generic;
using Xunit;
using Mrs_Cake.Services;
using Mrs_Cake.Models;
using Mrs_Cake.MrsCakeData;
using FluentAssertions;

namespace Test_Mrs_Cake
{
    public class LogoutServiceTest
    {
        private readonly LogoutService _logoutService;

        public LogoutServiceTest()
        {
            IMrsCakeDatabaseSettings settings = new MrsCakeDatabaseSettings();
            settings.ConnectionString = "mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority";
            settings.DatabaseName = "Mrs_Cake_Test";
            settings.CollectionName_Users = "Login_Logout_Test";

            _logoutService = new LogoutService(settings);
        }

        [Fact]
        public void GetByIdTest()
        {
            string testGetById = "5fba80a9452ad23904899028";

            User expectedUser = new User();
            expectedUser.Id = testGetById;
            expectedUser.FirstName = "Michael";
            expectedUser.LastName = "Jackson";
            expectedUser.Email = "superstar@gmail.com";
            expectedUser.Password = "BillieJean15";
            expectedUser.MobilePhone = "53453453533";
            expectedUser.Address = "";
            expectedUser.CreditCardNumber = "5672113245123441";
            expectedUser.UserRole = "Customer";
            expectedUser.LoginStatus = "";

            User userFromDB = _logoutService.GetById(testGetById);

            expectedUser.Should().BeEquivalentTo(userFromDB);
        }


        [Fact]
        public void LogoutUserTest()
        {
            string testId = "5fba7c7d452ad23904899027";

            _logoutService.Logout(testId);

            User userFromDB = _logoutService.GetById(testId);

            Assert.True(userFromDB.LoginStatus == "");
        }
    }
}
