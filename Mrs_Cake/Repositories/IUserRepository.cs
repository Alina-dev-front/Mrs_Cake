using System.Collections.Generic;
using Mrs_Cake.Models;

namespace Mrs_Cake.Repositories
{
    public interface IUserRepository
    {
        List<User> GetAll();
        User GetById(string id);
        void Delete(string id);
        void Update(string id, User user);
        User Create(User user);
    }
}
