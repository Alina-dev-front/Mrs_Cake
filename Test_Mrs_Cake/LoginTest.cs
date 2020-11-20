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
            settings.CollectionName_Users = "Users_Test";

            _loginService = new LoginService(settings);
        }

        [Fact]
        public void GetUsersFromTestDbAndCount()
        {
            List<User> testListOfAllUsers = _loginService.Get();

            int numberOfUsersInTestDB = 9;

            Assert.Equal(numberOfUsersInTestDB, testListOfAllUsers.Count);
        }


        [Fact]
        public void LoginTestUserPass()
        {
            string testUserEmailInput = "robin-scherbatsky1983@gmail.com";
            string testUserPasswordInput = "ggtgt790PPi";
            
            _loginService.Login(testUserEmailInput, testUserPasswordInput);

            List<User> usersFromDB = _loginService.Get();
            User result = usersFromDB.Find(user => user.Email == testUserEmailInput);

            Assert.True(result.LoginStatus == "Logged in");
        }

        /*[Fact]
        public void LoginTestUserFailWrongPassword()
        {
            string testUserEmailInput = "barney13stinson@gmail.com";
            string testUserPasswordInput = "frgbgDER43";

            Assert.Equal(1, 1);
        }

        [Fact]
        public void LoginTestUserFailUserNotFound()
        {
            Assert.Equal(1, 1);
        }*/
    }
}
