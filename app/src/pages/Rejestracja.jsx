import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css'

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Phone: ${phone}, Birthdate: ${birthdate}`);
    // TODO: Połączenie z API i wyzłanie do bazy danych klientów
  };
  return (
    <div className='formularz'>
      <h1>Rejestracja</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicFirstName" className='fgroup'>
        <Form.Label>Imię:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Podaj swoje imię"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicLastName" className='fgroup'>
        <Form.Label>Nazwisko:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Podaj swoje nazwisko"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail" className='fgroup'>
        <Form.Label>Adres mailowy</Form.Label>
        <Form.Control
          type="email"
          placeholder="Podaj adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPhone" className='fgroup'>
        <Form.Label>Numer telefonu:</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Podaj numer telefonu"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicBirthdate" className='fgroup'>
        <Form.Label>Data urodzenia:</Form.Label>
        <Form.Control
          type="date"
          placeholder="Podaj swoją datę urodzenia"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </Form.Group>

      <div className='buttonform'>
          <Button variant="outline-warning" type="submit" className='btnl text-center'>
            Zarejestruj mnie
          </Button>
          <div className='rej'>
            Posiadzasz konto? <a className='link' href='/login'>Zaloguj się</a>
          </div>
        </div>
    </Form>
    </div>
    
  );
};

export default SignupForm;