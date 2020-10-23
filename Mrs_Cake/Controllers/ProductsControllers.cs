using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Services;
using Mrs_Cake.MrsCakeData;

namespace Mrs_Cake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public ActionResult<List<Product>> Get() {
            List<Product> productsFromDB = _productService.Get();
            if (productsFromDB == null)
            {
                return NotFound();
            }
            return productsFromDB;
        }


        [HttpGet("{id:length(24)}", Name = "GetProduct")]
        public ActionResult<Product> GetById(string id)
        {
            var productFromDB = _productService.GetById(id);

            if (productFromDB == null)
            {
                return NotFound();
            }
            return productFromDB;
        }

        [HttpPost]
        public ActionResult<Product> Create(Product product)
        {
            _productService.Create(product);

            return CreatedAtRoute("GetProduct", new { id = product.Id.ToString() }, product);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Product productIn)
        {
            var productFromDB = _productService.GetById(id);

            if (productFromDB == null)
            {
                return NotFound();
            }
            _productService.Update(id, productIn);
            
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var productFromDB = _productService.GetById(id);

            if (productFromDB == null)
            {
                return NotFound();
            }
            _productService.Remove(productFromDB.Id);

            return NoContent();
        }
    }
}
