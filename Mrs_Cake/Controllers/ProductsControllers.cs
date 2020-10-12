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
<<<<<<< HEAD
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
=======
        private readonly DisconnectedRepository _repo ;
        public ProductsController(DisconnectedRepository repository)
        {
            this._repo = repository;
>>>>>>> master
        }

        [HttpGet]
<<<<<<< HEAD
        public ActionResult<List<Product>> Get() {
            List<Product> productsFromDB = _productService.Get();
            if (productsFromDB == null)
            {
                return NotFound();
            }
            return productsFromDB;
=======
        public IEnumerable<Product> Get()
        {
            return _repo.GetProducts();
>>>>>>> master
        }


        [HttpGet("{id:length(24)}", Name = "GetProduct")]
        public ActionResult<Product> GetById(string id)
        {
<<<<<<< HEAD
            var productFromDB = _productService.GetById(id);

            if (productFromDB == null)
            {
                return NotFound();
            }
            return productFromDB;
=======
            return Ok(_repo.GetProductById(id));
>>>>>>> master
        }

        [HttpPost]
        public ActionResult<Product> Create(Product product)
        {
<<<<<<< HEAD
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

=======
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
>>>>>>> master
            return NoContent();
        }
    }
}
