using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Services;

namespace Mrs_Cake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly OrderService _orderService;

        public OrdersController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public ActionResult<List<Order>> Get()
        {
            List<Order> ordersFromDB = _orderService.Get();
            if (ordersFromDB == null)
            {
                return NotFound();
            }
            return ordersFromDB;
        }


        [HttpGet("{id:length(24)}", Name = "GetOrder")]
        public ActionResult<Order> GetById(string id)
        {
            var orderFromDB = _orderService.GetById(id);

            if (orderFromDB == null)
            {
                return NotFound();
            }
            return orderFromDB;
        }

        [HttpPost]
        public ActionResult<Order> Create(Order order)
        {
            _orderService.Create(order);

            return CreatedAtRoute("GetOrder", new { id = order.Id.ToString() }, order);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Order orderIn)
        {
            var orderFromDB = _orderService.GetById(id);

            if (orderFromDB == null)
            {
                return NotFound();
            }
            _orderService.Update(id, orderIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var orderFromDB = _orderService.GetById(id);

            if (orderFromDB == null)
            {
                return NotFound();
            }
            _orderService.Remove(orderFromDB.Id);

            return NoContent();
        }
    }
}
