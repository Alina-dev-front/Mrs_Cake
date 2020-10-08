using System.Collections.Generic;
using Mrs_Cake.Models;

namespace Mrs_Cake.Repositories
{
    public interface IProductRepository
    {
        List<Product> GetAll();
        Product GetById(string id);
        void Delete(string id);
        void Update(string id, Product product);
        Product Create(Product product);
    }
}
