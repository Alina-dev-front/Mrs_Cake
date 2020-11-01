using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Repositories;
using Mrs_Cake.Services;

namespace Mrs_Cake.Controllers
{
    

        [Route("api/[controller]")]
        [ApiController]
        public class MailController : ControllerBase
        {
            private readonly IMailService mailService;
            public MailController(IMailService mailService)
            {
                this.mailService = mailService;
            }
            [HttpPost("send")]
            public async Task<IActionResult> SendMail([FromForm] ResetRequest request)
            {
                try
                {
                    await mailService.SendEmailAsync(request);
                    return Ok();
                }
                catch (Exception ex)
                {
                    throw;
                }

            }
    }
}