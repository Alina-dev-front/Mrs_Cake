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

            int numberOfProductsInTestDB = 3;

            Assert.Equal(numberOfProductsInTestDB, testList.Count);
        }

        [Fact]
        public void GetOrderById()
        {
            string testGetById = "5fb69b1e152b429ef5df89b8";

            Order orderFromDB = _orderService.GetById(testGetById);
            List<Product> products = orderFromDB.OrderedProducts;

            Order expectedÓrder = new Order();
            expectedÓrder.Id = testGetById;
            expectedÓrder.Number = 0;
            expectedÓrder.Paid = true;
            expectedÓrder.OrderedProducts = products;
            expectedÓrder.TotalPrice = 4331;
            expectedÓrder.UserId= "parul@gmail.com";
            expectedÓrder.Address = "Drottningsgatan/Göteborg/Sweden/12154";
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
            string updateTestId = "5fb6b8f6df549c3da0e0be1b";

            Order orderFromDB = _orderService.GetById(updateTestId);

            Order orderWithNewData = new Order();
            orderWithNewData.Number = orderFromDB.Number ;
            orderWithNewData.Paid = orderFromDB.Paid;
            orderWithNewData.TotalPrice = orderFromDB.TotalPrice ;
            orderWithNewData.OrderedProducts = orderFromDB.OrderedProducts;
            orderWithNewData.DeliveryMethod = orderFromDB.DeliveryMethod;
            orderWithNewData.Comments = orderFromDB.Comments + " y la luna";
            orderWithNewData.UserId = orderFromDB.UserId;
            orderWithNewData.Address = orderFromDB.Address;

            _orderService.Update(updateTestId, orderWithNewData);

            Order updatedProduct = _orderService.GetById(orderWithNewData.Id);

            orderWithNewData.Should().BeEquivalentTo(updatedProduct);
        }
        /*
        [Fact]
        public void DeleteProductInTestDB()
        {
            Order testProduct = new Order();
            testProduct.Name = "TO DELETE";
            testProduct.ProductType = "Pie";
            testProduct.Bakery = "Good Test";
            testProduct.Description = "Perfectly written test";
            testProduct.Price = 100;
            testProduct.imageUrl = "ProductPage_Cakes/Lala.jpg";

            _orderService.Create(testProduct);

            Order productFromDB = _orderService.GetById(testProduct.Id);

            _orderService.Remove(productFromDB);

            Assert.DoesNotContain(productFromDB, _orderService.Get());
        }
        */
    }
}
