using System.Collections.Generic;
using Mrs_Cake.Models;

namespace Mrs_Cake.Repositories
{
    public interface IOrderRepository
    {
        List<Order> GetAll();
        Order GetById(string id);
        void Delete(string id);
        void Update(string id, Order order);
        Order Create(Order order);
    }
}
