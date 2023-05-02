import React, { useEffect, useState } from "react";
import axios from "axios";
import './zwierze.css'
import { useParams } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';
import { Col, Button } from "react-bootstrap";

const Zwierze = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/shelter`);
        const shelters = response.data;
        let foundPet = null;

        for (const shelter of shelters) {
          const animal = shelter.animals.find(animal => animal.internalId === id);
          if (animal) {
            foundPet = {
              ...animal.decscription,
              race: animal.race,
              shelter: {
                name: shelter.name,
                city: shelter.city,
                zipCode: shelter.zipCode,
                address: shelter.address,
                contactMail: shelter.contactMail,
                contactNumber: shelter.contactNumber,
              },
            };
            break;
          }
        }

        setPet(foundPet);
      } catch (error) {
        console.error("Błąd podczas pobierania danych o zwierzęciu:", error);
      }
    };

    fetchPet();
  }, [id]);

  if (!pet) {
    return (
      <div className="spinner-container">
        <ClipLoader color="var(--primary-color)" loading={loading} size={100} />
        <p>Już niedługo będziesz mógł adoptować swojego zwierzaka...</p>
      </div>
    );
  }

  return (
    <div className="zwierzebd">
      <div className="name">
        <h1 className="nametekst">{pet.name}</h1>
      </div>
      <div className="zdjecieiatrybuty">
        <Col sm={6}>
          <div class="miejscezdjecia">
            <img className="zdjecie" src={pet.image} alt={pet.name} />
          </div>
        </Col>
        <Col sm={6}>
          <div className="atrybuty">
            <div className="atrybut"><b>Imię:</b> {pet.name}</div>
            <div className="atrybut"><b>Typ zwierzęcia:</b> {pet.race}</div>
            <div className="atrybut"><b>Rasa:</b> {pet.type}</div>
            <div className="atrybut"><b>Płeć:</b> {pet.gender}</div>
            <div className="atrybut"><b>Wiek:</b> {pet.age} {pet.age === 1 ? "rok" : (pet.age % 10 >= 2 && pet.age % 10 <= 4 && (pet.age % 100 < 10 || pet.age % 100 >= 20) ? "lata" : "lat")}</div>
            <div className="atrybut"><b>Wielkość:</b> {pet.size}</div>
          </div>
          <div className="przycisk">
            <Button className='btnwsp' variant='outline-warning' >Wesprzyj!</Button>
          </div>
        </Col>
      </div>
      <div className="opisidane">
        <Col sm={6}>
          <div className="opis">
            <div className="atrybut">Opis: {pet.additionalInfo}</div>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="daneschroniska">
            <h2>{pet.shelter.name}</h2>
            <p>Adres: {pet.shelter.address}, {pet.shelter.zipCode} {pet.shelter.city}</p>
            <p>Email: {pet.shelter.contactMail}</p>
            <p>Telefon: {pet.shelter.contactNumber}</p>
          </div>
        </Col>
      </div>
      
      
      
      
      
      
    </div>
  );
};

export default Zwierze;