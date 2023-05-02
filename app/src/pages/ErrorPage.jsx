import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ErrorImage from '../assets/errorpage.jpg'
function ErrorPage() {
  return (
    <div>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img src={ErrorImage} alt="error" className="img-fluid mb-3" />
            </Col>
            <Col md={6}>
              <h2 className="mb-4">Błąd 404</h2>
              <p>
                Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
              </p>
              <Button variant="secondary" href="/">Powrót na stronę główną</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ErrorPage;