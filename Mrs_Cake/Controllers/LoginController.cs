using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;
using Mrs_Cake.Models;
using Mrs_Cake.LoginDetails;
using System.Web.Http.Cors;

namespace Mrs_Cake.Controllers
{

   
    [Route("api/[controller]")]
   
    
    public class LoginController
    {
        [RoutePrefix("Api/login")]
        public class LoginController : ApiController
        {
            UsersEntities DB = new UsersEntities();
            [Route("InsertUser")]
            [HttpPost]
            public object InsertUser(Register Reg)
            {
                try
                {
                    UserLogin EL = new UserLogin();
                    if (EL.Id == 0)
                    {
                        EL.UserName = Register.UserName;
                       
                        EL.Email = Reg.Email;
                        EL.Password = Reg.Password;
                       
                        DB.UserLogins.Add(EL);
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Record SuccessFully Saved." };
                    }
                }
                catch (Exception)
                {

                    throw;
                }
                return new Response
                { Status = "Error", Message = "Invalid Data." };
            }
            [Route("Login")]
            [HttpPost]
            public Response UserLogin(Login login)
            {
                var log = DB.EmployeeLogins.Where(x => x.Email.Equals(login.Email) &&
                          x.Password.Equals(login.Password)).FirstOrDefault();

                if (log == null)
                {
                    return new Response { Status = "Invalid", Message = "Invalid User." };
                }
                else
                    return new Response { Status = "Success", Message = "Login Successfully" };
            }
        }
    }
}

