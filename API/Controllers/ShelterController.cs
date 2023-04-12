using Domain;
using Microsoft.AspNetCore.Mvc;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;
using System.Net;
using System.Web;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShelterController : ControllerBase
    {
        private readonly IAsyncDocumentSession session;
        private readonly string shelterIdString = "shelters/";

        public ShelterController(IAsyncDocumentSession Session)
        {
            session = Session;
        }

        // GET: api/<ShelterController>
        [HttpGet]
        public async Task<List<Shelter>> Get()
        {
            var shelters = await session
                .Query<Shelter>()
                .ToListAsync();
            return shelters;
        }

        // GET api/<ShelterController>/5
        [HttpGet("{id}")]
        public async Task<Shelter> Get(string id)
        {
            id = shelterIdString + id;
            var shelter = await session.LoadAsync<Shelter>(id);
            return shelter;
        }

        // POST api/<ShelterController>
        [HttpPost]
        public async Task PostShelter([FromBody] Shelter newShelter)
        {
            await session.StoreAsync(newShelter);
            await session.SaveChangesAsync();
        }

        // POST api/<ShelterController>
        [HttpPost]
        public async Task PostAnimal(string id, [FromBody] Animal animal)
        {
            id = shelterIdString + id;
            var shelter = await session.LoadAsync<Shelter>(id);
            shelter.Animals.Add(animal);
            await session.SaveChangesAsync();
        }

        // PUT api/<ShelterController>/5
        [HttpPut("{id}")]
        public async Task PutShelter(string id, [FromBody] Shelter shelter)
        {
            await session.StoreAsync(shelter);
            await session.SaveChangesAsync();
        }

        // PUT api/<ShelterController>/5
        [HttpPut("{id}")]
        public async Task PutAnimal(string id, [FromBody] Shelter animal)
        {
            await session.StoreAsync(animal);
            await session.SaveChangesAsync();
        }

        // DELETE api/<ShelterController>/5
        [HttpDelete("{id}")]
        public async Task DeleteShelter(string id)
        {
            id = shelterIdString + id;
            var shelter = await session.LoadAsync<Shelter>(id);
            session.Delete(shelter);
            await session.SaveChangesAsync();
        }

        // DELETE api/<ShelterController>/5
        [HttpDelete("{id}")]
        public async Task DeleteAnimal(string id)
        {
            id = shelterIdString + id;
            var animal = await session.LoadAsync<Animal>(id);
            session.Delete(animal);
            await session.SaveChangesAsync();
        }
    }
}