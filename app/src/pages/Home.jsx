import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeImage from '../assets/home.jpg'
function Home() {
  return (
    <div>


      {/* Sekcja 1 */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
            </Col>
            <Col md={6}>
              <h2 className="mb-4">Pomóż zwierzakom znaleźć nowy dom!</h2>
              <p>
              Pomaganie zwierzakom to jedna z najpiękniejszych rzeczy, jakie możemy robić dla naszych mniejszych przyjaciół.
               Każdego dnia tysiące zwierząt szuka nowego domu, a my możemy im w tym pomóc. Dlaczego warto? 
               Dlatego, że każdy z nas ma w sobie coś, co może pomóc. Może to być mała kwota pieniędzy, trochę czasu, 
               a może po prostu chęć pomocy. Adoptowanie zwierzęcia to nie tylko dobry uczynek, ale także wspaniała przygoda,
                która na zawsze odmieni nasze życie.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sekcja 2 */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="mb-4">Wybierz w jaki sposób chcesz pomagać zwierzętom!</h2>
          <p>Chcemy, aby każdy pupil czuł się dobrze. Rozumiemy, że nie każdy może podjąć się fizycznej adopcji,
            dlatego chcemy umożliwić wirtualną adopcję, w której możesz wpłacać pieniądze na wybranego pupila
            lub umówić się z nim na długi spacer!
            Jeśli zastanawiasz się, jak możesz pomóc zwierzakom, mamy dla Ciebie kilka pomysłów. 
            Możesz adoptować zwierzę i zapewnić mu ciepły i bezpieczny dom. Wirtualna adopcja to również wspaniałe rozwiązanie. 
            Dzięki temu możesz regularnie wpłacać pieniądze na wybranego pupila i pomagać mu w ten sposób. 
            A jeśli chcesz spędzić czas na świeżym powietrzu, możesz umówić się ze schroniskiem na długi spacer z psem. 
            To nie tylko przyjemna forma spędzenia czasu, ale również szansa dla psa na odrobinę wolności i ruchu.
            
            
            
            </p>
          <Row>
            <Col md={4}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
              <h4>Adoptuj</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
            <Col md={4}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
              <h4>Wpłacaj</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
            <Col md={4}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
              <h4>Spaceruj</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tellus euismod,
                posuere eros eget, fringilla justo.
              </p>
              <Button variant="secondary">Dowiedz się więcej</Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Sekcja 3 */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="mb-4">Wspieraj zwierzęta, zawsze i wszędzie!</h2>
              <p>
              Wsparcie zwierząt to coś, co możemy robić nie tylko wtedy, gdy jesteśmy w pobliżu schroniska.
               Możemy robić to zawsze i wszędzie. Wystarczy tylko odrobina dobrej woli i chęci.
                Możemy wpłacać pieniądze na różne organizacje, które pomagają zwierzętom,
                 a także podpisywać różnego rodzaju petycje i w ten sposób wyrażać swoje poparcie dla działań na rzecz zwierząt.
                  Warto również pamiętać, że zawsze możemy pomóc zwierzętom w naszej okolicy. Możemy na przykład wyjść na spacer z
                   psem sąsiada, kiedy on nie ma na to czasu, lub pomóc w opiece nad kotem znajomego, który wyjeżdża na wakacje.
              </p>
              <Button variant="secondary">Wesprzyj!</Button>
            </Col>
            <Col md={6}>
              <img src={homeImage} alt="placeholder" className="img-fluid mb-3" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;