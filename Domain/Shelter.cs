using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Shelter
    {
        public List<Animal> Animals { get; set; } // zwierzak bazowany na klasie animal
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } //krótki opis schroniska
        public string City { get; set; }
        public string ZipCode { get; set; }
        public string Address { get; set; }
        public string ContactMail { get; set; }
        public string ContactNumber { get; set; }
    }
}