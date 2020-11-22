using System;
using System.Collections.Generic;
using Xunit;
using Mrs_Cake.Services;
using Mrs_Cake.Models;
using Mrs_Cake.MrsCakeData;

namespace Test_Mrs_Cake
{
    public class LoginServiceTest
    {
        private readonly LoginService _loginService;

        public LoginServiceTest()
        {
            IMrsCakeDatabaseSettings settings = new MrsCakeDatabaseSettings();
            settings.ConnectionString = "mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority";
            settings.DatabaseName = "Mrs_Cake_Test";
            settings.CollectionName_Users = "Login_Logout_Test";

            _loginService = new LoginService(settings);
        }

        [Fact]
        public void GetUsersFromTestDbAndCount()
        {
            List<User> testListOfAllUsers = _loginService.Get();

            int numberOfUsersInTestDB = 5;

            Assert.Equal(numberOfUsersInTestDB, testListOfAllUsers.Count);
        }


        [Fact]
        public void LoginTestUserSuccesfulLogin()
        {
            string testUserEmailInput = "shc@gmail.com";
            string testUserPasswordInput = "bgtrfvEnhjk7";
            
            _loginService.Login(testUserEmailInput, testUserPasswordInput);

            List<User> usersFromDB = _loginService.Get();
            User result = usersFromDB.Find(user => user.Email == testUserEmailInput);

            Assert.True(result.LoginStatus == "Logged in");
        }

        [Fact]
        public void LoginTestUserWrongPassword()
        {
            string testUserEmailInput = "coffee-biscuits@gmail.com";
            string testUserPasswordInput = "dcdcd222dfffFtest";

            _loginService.Login(testUserEmailInput, testUserPasswordInput);

            List<User> usersFromDB = _loginService.Get();
            User result = usersFromDB.Find(user => user.Email == testUserEmailInput);

            Assert.True(result.LoginStatus == "Invalid password");
        }

        [Fact]
        public void LoginTestUserFailUserNotFound()
        {
            string testUserEmailInput = "sweet_life_test@gmail.com";
            string testUserPasswordInput = "445ttfc668D";

            _loginService.Login(testUserEmailInput, testUserPasswordInput);

            List<User> usersFromDB = _loginService.Get();
            User result = usersFromDB.Find(user => user.Email == testUserEmailInput);

            Assert.True(result == null);
        }
    }
}
