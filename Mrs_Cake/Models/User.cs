using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mrs_Cake.Interfaces;

namespace Mrs_Cake.Models
{
    public class User : ImodifactionHistory
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string MobilePhone { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string CreditCardNUmber { get; set; }
        public UserRolls UserRolls { get; set; }

        public DateTime DateModified { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsDirty { get; set; }



    }
}
