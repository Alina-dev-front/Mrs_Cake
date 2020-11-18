using Xunit;
using Mrs_Cake.Services;
using Mrs_Cake.Models;
using System.Linq;
using MongoDB.Driver;
using Mrs_Cake.MrsCakeData;

namespace Test_Mrs_Cake
{
    class OrdersServiceTest
    {
        private readonly OrderService _orderService;

        public OrdersServiceTest()
        {
            IMrsCakeDatabaseSettings settings = new MrsCakeDatabaseSettings();
            settings.ConnectionString = "mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority";
            settings.DatabaseName = "Mrs_Cake";
            settings.CollectionName_Orders = "Orders_Test";

            _orderService = new OrderService(settings);
        }

    }
}
