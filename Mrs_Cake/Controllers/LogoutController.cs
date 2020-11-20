using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Services;
using Mrs_Cake.Models;


namespace Mrs_Cake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogoutController : ControllerBase
    {
        private readonly LogoutService _logoutService;

        public LogoutController(LogoutService logoutService)
        {
            _logoutService = logoutService;
        }

        [HttpPost]
        public void LogoutUser(User user)
        {
            _logoutService.Logout(user.Id);
        }
    }
}
