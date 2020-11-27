using System.Collections.Generic;
using System.Linq;
using Mrs_Cake.Models;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;

namespace Mrs_Cake.Services
{
    public class OrderService
    {
        private readonly IMongoCollection<Order> _orders;

        public OrderService(IMrsCakeDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _orders = database.GetCollection<Order>(settings.CollectionName_Orders);
        }

        public List<Order> Get() =>
            _orders.Find(order => true).ToList();

        public Order GetById(string id) =>
            _orders.Find<Order>(order => order.Id == id).FirstOrDefault();

        public Order Create(Order order)
        {
            _orders.InsertOne(order);
            return order;
        }

        public void Update(string id, Order order)
        {
            Order foundOrder = _orders.Find(n => n.Id == id).FirstOrDefault();
            foundOrder.Number = order.Number;
            foundOrder.OrderedProducts = order.OrderedProducts;
            foundOrder.Paid = order.Paid;
            foundOrder.TotalPrice = order.TotalPrice;
            foundOrder.UserId = order.UserId;
            foundOrder.DeliveryMethod = order.DeliveryMethod;
            foundOrder.Comments = order.Comments;
            foundOrder.Address = order.Address;


            _orders.ReplaceOne(order => order.Id == id, order);

        }
           

        public void Remove(Order orderIn) =>
            _orders.DeleteOne(order => order.Id == orderIn.Id);

        public void Remove(string id) =>
            _orders.DeleteOne(order => order.Id == id);
    }
}
