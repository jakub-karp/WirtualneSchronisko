using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class AnimalDescription
    {
        public string Name { get; set; }
        public int Age { get; set; } // wiek zwierzaka
        public string Gender { get; set; } // płeć zwierzaka
        public string Size { get; set; } //ogólny opis rozmiarów
        public string AdditionalInfo { get; set; } //dodatkowe informacje na temat zwierzaka
        public string Image { get; set; } //zdjęcie zwierzaka
    }

    public class Animal
    {
        public string Id { get; set; }
        public string InternalId { get; set; } //wewnetrzne id zwierzaka nadawne przez schronisko
        public string Race { get; set; } // rasa zwierzaka
        public string Type { get; set; } //typ na przykład golden retriver, gdy niewiadomo to mieszaniec
        public DateTime AdmittanceDate { get; set; } //data przyjecia zwierzaka w schroniskiu
        public AnimalDescription Decscription { get; set; } //krótki opis zwierzaka
    }
}