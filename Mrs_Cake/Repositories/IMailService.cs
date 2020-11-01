using Mrs_Cake.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mrs_Cake.Repositories
{
    public interface IMailService
    {
        Task SendEmailAsync(ResetRequest resetRequest);
    }
}
