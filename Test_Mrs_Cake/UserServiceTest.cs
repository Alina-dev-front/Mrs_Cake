using System;
using System.Collections.Generic;
using Xunit;
using Mrs_Cake.Services;
using Mrs_Cake.Models;
using Mrs_Cake.MrsCakeData;
using FluentAssertions;

namespace Test_Mrs_Cake
{
    public class UserServiceTest
    {
        private readonly UserService _userService;

        public UserServiceTest()
        {
            IMrsCakeDatabaseSettings settings = new MrsCakeDatabaseSettings();
            settings.ConnectionString = "mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority";
            settings.DatabaseName = "Mrs_Cake_Test";
            settings.CollectionName_Users = "Users_Test";

            _userService = new UserService(settings);
        }
        [Fact]
        public void GetUserById()
        {
            string testGetById = "5fb67c637db76a339046b22e";
            User userFromDB = _userService.GetById(testGetById);
            User expectedUser = new User();
            expectedUser.Id = testGetById;
            expectedUser.FirstName = "Alex";
            expectedUser.LastName = "Render";
            expectedUser.Email = "alex.render@gmail.com";
            expectedUser.Password = "fvnMmksdjn447fd";
            expectedUser.Address = "Malmo";
            expectedUser.MobilePhone = "467894532171";
            expectedUser.CreditCardNumber = null;
            expectedUser.UserRole = "Admin";
            expectedUser.LoginStatus = "";
            expectedUser.Should().BeEquivalentTo(userFromDB);
        }
        [Fact]
        public void InsertNewUserInTestDB()
        {
            User testUser = new User();
            testUser.FirstName = "Parul";
            testUser.LastName = "Parul";
            testUser.Address = "Gothenburg";
            testUser.Email = "Parul@gmail.com";
            testUser.Password = "A234@45kkl";
            testUser.MobilePhone = "99997655";
            testUser.CreditCardNumber = "12345";
            testUser.LoginStatus = "";
            testUser.UserRole = "Customer";
            _userService.Create(testUser);
            User userFromDB = _userService.GetById(testUser.Id);
            testUser.Should().BeEquivalentTo(userFromDB);
        }
        [Fact]
        public void CountUsersInDb()
        {
            List<User> testList = _userService.Get();
            int numberOfUserInTestDB = 9;
            Assert.Equal(numberOfUserInTestDB, testList.Count);
        }
        [Fact]
        public void UpdateUserInTestDB()
        {
            string updateTestId = "5fb67c637db76a339046b239";
            User userFromDB = _userService.GetById(updateTestId);
            User UserWithNewData = new User();
            UserWithNewData.Id = userFromDB.Id;
            UserWithNewData.FirstName = "Update User " + userFromDB.FirstName;
            UserWithNewData.LastName = userFromDB.LastName;
            UserWithNewData.Address = userFromDB.Address;
            UserWithNewData.Email = userFromDB.Email;
            UserWithNewData.Password = userFromDB.Password;
            UserWithNewData.MobilePhone = userFromDB.MobilePhone;
            UserWithNewData.CreditCardNumber = userFromDB.CreditCardNumber;
            UserWithNewData.UserRole = userFromDB.UserRole;
            UserWithNewData.LoginStatus = userFromDB.LoginStatus;
            _userService.Update(updateTestId, UserWithNewData);
            User updatedUser = _userService.GetById(UserWithNewData.Id);
            Assert.Equal(UserWithNewData.FirstName, updatedUser.FirstName);
        }
        [Fact]
        public void DeleteUserInTestDB()
        {
            User testUser = new User();
            testUser.FirstName = "TO DELETE";
            testUser.Address = "Gothenburg";
            testUser.Email = "Parul@gmail.com";
            testUser.MobilePhone = "111111";
            _userService.Create(testUser);
            User testuserFromDB = _userService.GetById(testUser.Id);
            _userService.Remove(testuserFromDB);
            Assert.DoesNotContain(testuserFromDB, _userService.Get());
        }
    }
}


