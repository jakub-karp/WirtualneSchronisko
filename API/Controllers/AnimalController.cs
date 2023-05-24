using Domain;
using Microsoft.AspNetCore.Mvc;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly IAsyncDocumentSession session;
        private readonly string animalIdString = "animals/";

        public AnimalController(IAsyncDocumentSession Session)
        {
            session = Session;
        }

        // GET: api/<AnimalController>
        [HttpGet]
        public async Task<List<Animal>> Get()
        {
            var animals = await session
                .Query<Animal>()
                .ToListAsync();
            return animals;
        }

        // GET api/<AnimalController>/5
        [HttpGet("{id}")]
        public async Task<Animal> Get(string id)
        {
            id = animalIdString + id;
            var animal = await session.LoadAsync<Animal>(id);
            return animal;
        }

        // POST api/<ShelterController>
        [HttpPost]
        public async Task Post(string id, [FromBody] Animal animal)
        {
            id = animalIdString + id;
            var shelter = await session.LoadAsync<Shelter>(id);
            shelter.Animals.Add(animal);
            await session.SaveChangesAsync();
        }

        // PUT api/<AnimalController>/5
        [HttpPut("{id}")]
        public async Task Put(string id, [FromBody] Animal animal)
        {
            await session.StoreAsync(animal);
            await session.SaveChangesAsync();
        }

        // DELETE api/<ShelterController>/5
        [HttpDelete("{id}")]
        public async Task DeleteAnimal(string id)
        {
            id = animalIdString + id;
            var animal = await session.LoadAsync<Animal>(id);
            session.Delete(animal);
            await session.SaveChangesAsync();
        }
    }
}