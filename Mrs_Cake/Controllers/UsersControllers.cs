using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using Mrs_Cake.Models;
using Mrs_Cake.MrsCakeData;
using System.Web.Http;

namespace Mrs_Cake.Controllers
{
    public class UsersControllers : ApiController
    {
        private readonly DisconnectedRepository _repo = new DisconnectedRepository();

    }
}
