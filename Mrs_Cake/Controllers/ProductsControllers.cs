using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Services;


namespace Mrs_Cake.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("ReactPolicy")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService productService;
        public ProductsController(ProductService productService)
        {
            this.productService = productService;
        }
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return productService.GetAll();
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(productService.GetById(id));
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Product product)
        {
            return CreatedAtAction("Get", new { id = product.Id }, productService.Create(product));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Product product)
        {
            productService.Update(id, product);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            productService.Delete(id);
            return NoContent();
        }
        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
