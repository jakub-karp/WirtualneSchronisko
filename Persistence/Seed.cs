using Domain;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Reflection.Metadata.BlobBuilder;

namespace Persistence
{
    public static class Seed
    {
        public static async Task SeedData(IAsyncDocumentSession session)
        {
            var cultureInfo = new CultureInfo("pl-PL");
            var query = from Shelter in session.Query<Shelter>() select Shelter;
            var result = await query.ToListAsync();
            if (result.Count() != 0) return;

            var shelters = new List<Shelter>
            {
                new Shelter()
                {
                    Name = "Schronisko dla Bezdomnych Zwierząt w Toruniu",
                    Description = "W chwili obecnej schronisko dysponuje 121 kojcami różnej wielkości, która z reguły uzależniona jest od rodzaju potrzeb, jakie ma zwierzęciu spełniać.",
                    City = "Toruń",
                    ZipCode = "87-100",
                    Address = "Stanisława Przybyszewskiego 3",
                    ContactMail = "torun.schronisko@wp.pl",
                    ContactNumber = "566224887",
                    Animals = new List<Animal>
                    {
                        new Animal
                        {
                            InternalId = "1a",
                            Race = "Pies",
                            Type = "Mieszaniec",
                            AdmittanceDate = DateTime.Parse("15 stycznia 2022", cultureInfo),
                            Decscription = new AnimalDescription
                            {
                                Name="Burek",
                                Age=4,
                                Gender = "Samiec",
                                Size ="Średnich rozmiarów",
                                AdditionalInfo = "Spokojny i ułożony pies, boi się wysokich mężczyzn",
                                Image = "http://schronisko.kubakarp.pl/pliki/img/pies1.jpg"
                            }
                        },
                        new Animal
                        {
                            InternalId = "1b",
                            Race = "Kot",
                            Type = "Mieszaniec",
                            AdmittanceDate = DateTime.Parse("20 luty 2022", cultureInfo),
                            Decscription = new AnimalDescription
                            {
                                Name = "Flamel",
                                Age = 2,
                                Gender = "Samiec",
                                Size = "Małych rozmiarów",
                                AdditionalInfo = "Kot najlepiej by się czuł w domu bez innych zwierząt",
                                Image = "http://schronisko.kubakarp.pl/pliki/img/kot1.jpg"
                            }
                        }
                    }
                },
                new Shelter()
                {
                    Name = "Schronisko dla Zwierząt w Bydgoszczy",
                    Description = "Misją Schroniska dla Zwierząt w Bydgoszczy jest opieka nad pozbawionymi domu psami i udomowionymi kotami, które dom utraciły.",
                    City = "Bydgoszcz",
                    Address = "Grunwaldzka 298",
                    ZipCode = "85-438",
                    ContactMail = "azory@schronisko.org.pl",
                    ContactNumber = "512282853",
                    Animals = new List<Animal>
                    {
                        new Animal
                        {
                            InternalId = "2a",
                            Race = "Pies",
                            Type = "Golden Retriver",
                            AdmittanceDate = DateTime.Parse("15 grudnia 2022", cultureInfo),
                            Decscription = new AnimalDescription
                            {
                                Name="Człapek",
                                Age=2,
                                Gender = "Samiec",
                                Size ="Średnich rozmiarów",
                                AdditionalInfo = "Energiczny pies",
                                Image = "http://schronisko.kubakarp.pl/pliki/img/pies2.jpg"
                            }
                        },
                        new Animal
                        {
                            InternalId = "2b",
                            Race = "Kot",
                            Type = "Mieszaniec",
                            AdmittanceDate = DateTime.Parse("15 stycznia 2022", cultureInfo),
                            Decscription = new AnimalDescription
                            {
                                Name = "Żabka",
                                Age = 5,
                                Gender = "Samica",
                                Size = "Małych rozmiarów",
                                AdditionalInfo = "Kot Familijny",
                                Image = "http://schronisko.kubakarp.pl/pliki/img/kot2.jpg"
                            }
                        }
                    }
                },
                new Shelter()
                {
                    Name = "Schronisko na Paluchu",
                    Description = "Fundacja rozpoczęła działalność we wrześniu 2020 r. Połączyły nas lata doświadczenia w działaniu na rzecz bezdomnych zwierząt w pracy i wolontariacie w Schronisku Na Paluchu. Fundacja pomaga ciężko chorym podopiecznym schroniska: umieszcza je w domach tymczasowych, przeprowadza diagnostykę, leczenie i znajduje domy. Otacza opieką także inne bezdomne zwierzęta, które nie mogą być przyjęte na Paluch.",
                    City = "Warszawa",
                    Address = "Paluch 2",
                    ZipCode = "02-147",
                    ContactMail = "ba@napaluchu.waw.pl",
                    ContactNumber = "228681578",
                    Animals = new List<Animal>
                    {
                        new Animal
                        {
                            InternalId = "3a",
                            Race = "Pies",
                            Type = "Buldog Angielski",
                            AdmittanceDate = DateTime.Parse("12 luty 2020", cultureInfo),
                            Decscription = new AnimalDescription
                            {
                                Name="Łatek",
                                Age=3,
                                Gender = "Samiec",
                                Size ="Średnich rozmiarów",
                                AdditionalInfo = "Energiczny pies",
                                Image = "http://schronisko.kubakarp.pl/pliki/img/pies3.jpg"
                            }
                        },
                        new Animal
                        {
                            InternalId = "3b",
                            Race = "Kot",
                            Type = "Mieszaniec",
                            AdmittanceDate = DateTime.Parse("25 luty 2023", cultureInfo),
                            Decscription = new AnimalDescription
                            {
                                Name = "Tabby",
                                Age = 1,
                                Gender = "Samica",
                                Size = "Małych rozmiarów",
                                AdditionalInfo = "Kot Familijny",
                                Image = "http://schronisko.kubakarp.pl/pliki/img/kot3.jpg"
                            }
                        },
                        new Animal
                        {
                            InternalId = "4a",
                            Race = "Pies",
                            Type = "Golden Retriever",
                            AdmittanceDate = DateTime.Parse("12 luty 2022", cultureInfo),
                            Decscription = new AnimalDescription
                            {
                                Name="Złotek",
                                Age=1,
                                Gender = "Samiec",
                                Size ="Średnich rozmiarów",
                                AdditionalInfo = "Bardzo potulny charyzmatyczny piesek",
                                Image = "https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_960_720.jpg"
                            }
                        }
                    }
                },
            };
            foreach (var shelter in shelters)
            {
                await session.StoreAsync(shelter);
            };
            await session.SaveChangesAsync();
        }
    }
}