using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Mrs_Cake.Models;
using Mrs_Cake.Services;
using Mrs_Cake.MrsCakeData;

namespace Mrs_Cake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BakeriesController : ControllerBase
    {
        private readonly BakeryService _bakeryService;

        public BakeriesController(BakeryService bakeryService)
        {
            _bakeryService = bakeryService;
        }

        [HttpGet]
        public ActionResult<List<Bakery>> Get()
        {
            List<Bakery> bakeriesFromDB = _bakeryService.Get();
            if (bakeriesFromDB == null)
            {
                return NotFound();
            }
            return bakeriesFromDB;
        }

        [HttpGet("{id:length(24)}", Name = "GetBakery")]
        public ActionResult<Bakery> GetById(string id)
        {
            var bakeryFromDB = _bakeryService.GetById(id);

            if (bakeryFromDB == null)
            {
                return NotFound();
            }
            return bakeryFromDB;
        }

        [HttpPost]
        public ActionResult<Bakery> Create(Bakery bakery)
        {
            _bakeryService.Create(bakery);

            return CreatedAtRoute("GetBakery", new { id = bakery.Id.ToString() }, bakery);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Bakery bakeryIn)
        {
            var bakeryFromDB = _bakeryService.GetById(id);

            if (bakeryFromDB == null)
            {
                return NotFound();
            }
            _bakeryService.Update(id, bakeryIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var bakeryFromDB = _bakeryService.GetById(id);

            if (bakeryFromDB == null)
            {
                return NotFound();
            }
            _bakeryService.Remove(bakeryFromDB.Id);

            return NoContent();
        }
    }
}
