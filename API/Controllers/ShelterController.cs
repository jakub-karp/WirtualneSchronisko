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
        public async Task Post([FromBody] Shelter newShelter)
        {
            await session.StoreAsync(newShelter);
            await session.SaveChangesAsync();
        }

        // PUT api/<ShelterController>/5
        [HttpPut("{id}")]
        public async Task Put(string id, [FromBody] Shelter shelter)
        {
            await session.StoreAsync(shelter);
            await session.SaveChangesAsync();
        }

        // DELETE api/<ShelterController>/5
        [HttpDelete("{id}")]
        public async Task Delete(string id)
        {
            id = shelterIdString + id;
            var shelter = await session.LoadAsync<Shelter>(id);
            session.Delete(shelter);
            await session.SaveChangesAsync();
        }
    }
}