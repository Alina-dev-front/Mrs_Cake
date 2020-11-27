using System;
using System.Collections.Generic;
using Xunit;
using Mrs_Cake.Services;
using Mrs_Cake.Models;
using System.Linq;
using MongoDB.Driver;
using FluentAssertions;
using Mrs_Cake.MrsCakeData;


namespace Test_Mrs_Cake
{
   public class OrdersServiceTest
    {
        private readonly OrderService _orderService;

        public OrdersServiceTest()
        {
            IMrsCakeDatabaseSettings settings = new MrsCakeDatabaseSettings();
            settings.ConnectionString = "mongodb+srv://Alina_Iakimchuk:Greenday15@mrscakecluster.vsx9o.azure.mongodb.net/Mrs_Cake?retryWrites=true&w=majority";
            settings.DatabaseName = "Mrs_Cake_Test";
            settings.CollectionName_Orders = "Orders_Test";

            _orderService = new OrderService(settings);
        }

        [Fact]
        public void CountOrdersInDb()
        {
            List<Order> testList = _orderService.Get();

            int numberOfProductsInTestDB = 2;

            Assert.Equal(numberOfProductsInTestDB, testList.Count);
        }

        [Fact]
        public void GetOrderById()
        {
            string testGetById = "5fc0c2769f55cb735beddb39";

            Order orderFromDB = _orderService.GetById(testGetById);
            List<Product> products = orderFromDB.OrderedProducts;

            Order expectedÓrder = new Order();
            expectedÓrder.Id = testGetById;
            expectedÓrder.Number = 0;
            expectedÓrder.Paid = true;
            expectedÓrder.OrderedProducts = products;
            expectedÓrder.TotalPrice = 1748;
            expectedÓrder.UserId= "abdiachir@gmail.com";
            expectedÓrder.Address = "Ahrenbergsgatan 12A/Göteborg/Sverige/41673";
            expectedÓrder.Comments = "I wish extra Chocolate in the chocolate cakes";
            expectedÓrder.DeliveryMethod = "Home Delivery";

            expectedÓrder.Should().BeEquivalentTo(orderFromDB);
            
        }
        
        [Fact]
        public void InsertNewOrderInTestDB()
        {
            Order order = new Order();
            order.Number = 2;
            order.Paid = true;
            order.TotalPrice = 200;
            order.OrderedProducts = new List<Product>();
            order.DeliveryMethod = "Home Delivery";
            order.Comments = "I want extra Chocolate in every cake";
            order.UserId = "El sol siempre sale";
            order.Address = "AhrenbergsGatan12A/Göteborg/Sweden/12154";

            _orderService.Create(order);

            Order orderFromDB = _orderService.GetById(order.Id);

            orderFromDB.Should().BeEquivalentTo(order);
            
        }

        
        [Fact]
        public void UpdateOrderInTestDB()
        {
            string updateTestId = "5fc0c2769f55cb735beddb39";

            Order orderFromDB = _orderService.GetById(updateTestId);

            Order orderWithNewData = new Order();
            orderWithNewData.Id = orderFromDB.Id;
            orderWithNewData.Number = orderFromDB.Number ;
            orderWithNewData.Paid = orderFromDB.Paid;
            orderWithNewData.TotalPrice = orderFromDB.TotalPrice ;
            orderWithNewData.OrderedProducts = orderFromDB.OrderedProducts;
            orderWithNewData.DeliveryMethod = orderFromDB.DeliveryMethod;
            orderWithNewData.Comments =  orderFromDB.Comments ;
            orderWithNewData.UserId = orderFromDB.UserId + " y la luna";
            orderWithNewData.Address = orderFromDB.Address;

            _orderService.Update(updateTestId, orderWithNewData);

            Order updatedOrder = _orderService.GetById(orderWithNewData.Id);

            Assert.Equal(updatedOrder.Number,orderWithNewData.Number);
        }
        
        [Fact]
        public void DeleteOrderInTestDB()
        {
            Order testOrder = new Order();
            testOrder.Number = 10;
            testOrder.Paid = false ;
            testOrder.OrderedProducts = new List<Product>();
            testOrder.Address = "Somewhere in sweden";
            testOrder.TotalPrice = 100;
            testOrder.DeliveryMethod = "Home Delivery";

            _orderService.Create(testOrder);

            Order orderFromDB = _orderService.GetById(testOrder.Id);

            _orderService.Remove(orderFromDB);

            Assert.DoesNotContain(orderFromDB, _orderService.Get());
        }
        
    }
}
