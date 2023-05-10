import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button, Card, Col } from 'react-bootstrap';
import './adoptuj.css'
import {useNavigate} from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

const Adoptuj = () => {
  const api = 'http://localhost:5000/api/shelter'; //TODO: Podmienić na ścieżkę która zwróci żądanie GET API
  const historia = useNavigate();
  const [loading, setLoading] = useState(true);


  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [shelters, setShelters] = useState([]);
  const [selectedShelter, setSelectedShelter] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  useEffect(() => {
    const getPets = async () => {
      setLoading(true);
      try {
        const { data: shelters } = await axios.get(api);
        setShelters([...new Set(shelters.map((sh) => sh.name))]);
        const allPets = shelters.reduce((acc, shelter) => {
          const shelterAnimals = shelter.animals.map((animal) => ({
            ...animal,
            shelter: {
              name: shelter.name,
              city: shelter.city,
              zipCode: shelter.zipCode,
              address: shelter.address,
              contactMail: shelter.contactMail,
              contactNumber: shelter.contactNumber,
            },
          }));
          return [...acc, ...shelterAnimals];
        }, []);
        setPets(allPets);
        setFilteredPets(allPets);
        setBreeds([...new Set(allPets.map((pet) => pet.type))]);
        setTypes([...new Set(allPets.map((pet) => pet.race))]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPets();
    handleSearch(searchTerm, selectedBreed, selectedShelter, selectedGender, selectedType, selectedSize, selectedAge);
  }, []);

  const handleSearch = async (term, breed, shelter, gender, type, size, age) => {
    let filteredResults = pets;
  
    if (shelter) {
      filteredResults = filteredResults.filter(
        (pet) => pet.shelter.name.toLowerCase() === shelter.toLowerCase()
      );
    }
  
    if (term) {
      if (!isNaN(term)) {
        filteredResults = filteredResults.filter(
          (pet) => pet.decscription.age === parseInt(term)
        );
      } else {
        filteredResults = filteredResults.filter((pet) =>
          pet.decscription.name.toLowerCase().includes(term.toLowerCase())
        );
      }
    }
  
    if (breed) {
      filteredResults = filteredResults.filter(
        (pet) => pet.type.toLowerCase() === breed.toLowerCase()
      );
    }
  
    if (gender) {
      filteredResults = filteredResults.filter(
        (pet) => pet.decscription.gender === gender
      );
    }
    if (type) {
      filteredResults = filteredResults.filter(
      (pet) => pet.race === type
      );
    }
      
    if (size) {
      filteredResults = filteredResults.filter(
      (pet) => pet.decscription.size === size
      );
    }
      
    if (age) {
      filteredResults = filteredResults.filter(
      (pet) => pet.decscription.age === parseInt(age)
      );
    }
      
    setFilteredPets(filteredResults);
  };

  const handleInputChange = async (event) => {
  const value = event.target.value;
  setSearchTerm(value);
  handleSearch(value, selectedBreed, selectedShelter, selectedGender, selectedType, selectedSize, selectedAge);
};

const handleBreedChange = async (event) => {
  const value = event.target.value;
  setSelectedBreed(value);
  handleSearch(searchTerm, value, selectedShelter, selectedGender, selectedType, selectedSize, selectedAge);
};

const handleShelterChange = async (event) => {
  const value = event.target.value;
  setSelectedShelter(value);
  handleSearch(searchTerm, selectedBreed, value, selectedGender, selectedType, selectedSize, selectedAge);
};

const handleTypeChange = async (event) => {
  const value = event.target.value;
  setSelectedType(value);
  handleSearch(searchTerm, selectedBreed, selectedShelter, selectedGender, value, selectedSize, selectedAge);
};

const handleAdoptClick = (pet) => {
  historia('/zwierze/' + pet.internalId, { state: { pet } });
};

return (
  <div className='bodyadopt'>
    {loading ? (
      <div className="spinner-container">
        <ClipLoader color="var(--primary-color)" loading={loading} size={100} />
        <p>Szukamy pupila idealnego dla Ciebie...</p>
      </div>
    ) : (
      <>
      <Col sm={10}>
        <div className='cards'>
          {
            filteredPets.map((pet, index) => {
              return (
                <Card className='card' key={index}>
                  <Card.Img className='card-img' variant='top' src={pet.decscription.image} />
                  <Card.Title className='card-title'>{pet.decscription.name}</Card.Title>
                  <Card.Text className='card-age'>{pet.decscription.age} {pet.decscription.age === 1 ? "rok" : (pet.decscription.age % 10 >= 2 && pet.decscription.age % 10 <= 4 && (pet.decscription.age % 100 < 10 || pet.decscription.age % 100 >= 20) ? "lata" : "lat")}</Card.Text>
                  <Button className='btnadpt' variant='outline-warning' onClick={() => handleAdoptClick(pet)}>Adoptuj!</Button>
                </Card>
              )
            })
          }
        </div>
      </Col>
      <Col sm={2}>
        <div>
          <Form className='searchcol'>
            
            <Form.Control
              type="search"
              placeholder="Wyszukaj swojego pupila"
              className="search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <Form.Label className='label-search'>Wybierz schronisko:</Form.Label>
            <Form.Select className='shelter' value={selectedShelter} onChange={handleShelterChange}>
              <option value="">Wszystkie schroniska</option>
              {shelters.map((shelter, index) => {
                return (
                  <option value={shelter} key={index}>
                    {shelter}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Label className='label-search'>Wybierz typ:</Form.Label>
            <Form.Select className="type" value={selectedType} onChange={handleTypeChange}>
              <option value="">Wszystkie typy</option>
              {types.map((race, index) => {
                return (
                  <option value={race} key={index}>
                    {race}
                  </option>
                );
              })}
            </Form.Select>
            
            <Form.Label className='label-search'>Wybierz płeć:</Form.Label>
            <Form.Select className='gender' value={selectedGender} onChange={(event) => setSelectedGender(event.target.value)}>
              <option value="">Wszystkie płci</option>
              <option value="Samiec">Samiec</option>
              <option value="Samica">Samica</option>
            </Form.Select>

            <Form.Label className='label-search'>Wybierz preferowaną rasę:</Form.Label>
            <Form.Select className='breed' value={selectedBreed} onChange={handleBreedChange}>
              <option value="">Wszystkie rasy</option>
              {breeds.map((breed, index) => {
                return (
                  <option value={breed} key={index}>
                    {breed}
                  </option>
                );
              })}
            </Form.Select>

            <Form.Label className='label-search'>Wybierz rozmiar:</Form.Label>
            <Form.Select className='size' value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)}>
              <option value="">Wszystkie rozmiary</option>
              <option value="Małych rozmiarów">Mały</option>
              <option value="Średnich rozmiarów">Średni</option>
              <option value="Dużych rozmiarów">Duży</option>
            </Form.Select>

            <Form.Label className='label-search'>Wybierz wiek:</Form.Label>
            <Form.Control
              type="number"
              min="0"
              className="age"
              placeholder="Wiek zwierzaka"
              value={selectedAge}
              onChange={(event) => setSelectedAge(event.target.value)}
            />
            <Button className='btnsearch' variant="outline-success" onClick={() => handleSearch(searchTerm, selectedBreed, selectedShelter, selectedGender, selectedType, selectedSize, selectedAge)}>Wyszukaj</Button>
          </Form>
        </div>
        </Col>
      </>
    )}
  </div>
);

            }
          export default Adoptuj;
