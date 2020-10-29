using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Services;

namespace Mrs_Cake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            List<User> usersFromDB = _userService.Get();
            if (usersFromDB == null)
            {
                return NotFound();
            }
            return usersFromDB;
        }


        [HttpGet("{id:length(24)}", Name = "GetUser")]
        public ActionResult<User> GetById(string id)
        {
            var userFromDB = _userService.GetById(id);

            if (userFromDB == null)
            {
                return NotFound();
            }
            return userFromDB;
        }
        
        [HttpPost]
        public ActionResult<User> Create(User user)
        {
            _userService.Create(user);

            return CreatedAtRoute("GetUser", new { id = user.Id.ToString() }, user);
        }


        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, User userIn)
        {
            var userFromDB = _userService.GetById(id);

            if (userFromDB == null)
            {
                return NotFound();
            }
            _userService.Update(id, userIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var userFromDB = _userService.GetById(id);

            if (userFromDB == null)
            {
                return NotFound();
            }
            _userService.Remove(userFromDB.Id);

            return NoContent();
        }
    }
}   
