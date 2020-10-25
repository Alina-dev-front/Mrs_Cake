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
        public ActionResult<string> Get()
        {
            return "get";
        }

        [HttpPost]
        public User LoginUser(User user)
        {
           return _loginService.Login(user.Email, user.Password);
        }
    }
}
