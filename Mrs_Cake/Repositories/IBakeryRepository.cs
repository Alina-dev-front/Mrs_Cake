using System.Collections.Generic;
using Mrs_Cake.Models;

namespace Mrs_Cake.Repositories
{
    public interface IBakeryRepository
    {
        List<Bakery> GetAll();
        Bakery GetById(string id);
        void Delete(string id);
        void Update(string id, Bakery bakery);
        Bakery Create(Bakery bakery);
    }
}
