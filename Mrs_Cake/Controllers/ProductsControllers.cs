using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Services;
using Mrs_Cake.MrsCakeData;


namespace Mrs_Cake.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("ReactPolicy")]
    public class ProductsController : ControllerBase
    {
        private readonly DisconnectedRepository _repo ;
        public ProductsController(DisconnectedRepository repository)
        {
            this._repo = repository;
        }
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _repo.GetProducts();
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(_repo.GetProductById(id));
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Product product)
        {
            return CreatedAtAction("Get", new { id = product.Id }, _repo.SaveNewProduct(product));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromBody] Product product)
        {
            _repo.SaveUpdatedProduct(product);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            _repo.DeleteProduct(id);
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
