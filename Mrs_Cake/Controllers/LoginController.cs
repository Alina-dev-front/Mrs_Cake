using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Services;

namespace Mrs_Cake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginService _loginService;

        public LoginController(LoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            List<User> usersFromDb = _loginService.Get();
            if (usersFromDb == null)
            {
                return NotFound();
            }
            return usersFromDb;
        }

        [HttpPost]
        public User LoginUser(User user)
        {
            User authUser = _loginService.Login(user.Email, user.Password);
            if (authUser != null) {
                return authUser; 
            }
            return null;
        }
    }
}
