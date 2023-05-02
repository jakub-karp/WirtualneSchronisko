import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Do something with email and password here, e.g. send to server for authentication
  };

  return (
    <div className='formularz'>
      <h1>Logowanie</h1>
    
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className='fgroup'>
          <Form.Label>Adres mailowy:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Podaj adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='fgroup'>
          <Form.Label>Hasło:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Podaj hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className='buttonform'>
          <Button variant="outline-warning" type="submit" className='btnl text-center'>
            Zaloguj mnie
          </Button>
          <div className='rej'>
            Nie masz konta? <a className='link' href='/rejestracja'>Zarejestruj się</a>
          </div>
        </div>
        
      </Form>
    </div>
  );
};

export default LoginForm;
