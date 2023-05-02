import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import adoptImage1 from '../assets/grafika1.png'

const AdopcjaPsa = () => {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <section className="py-5">
            <h2 className="mb-4">Adopcja psa czy kota</h2>
            <p className="text-justify">
                        Adopcja zwierząt - jak adoptować i jakie warunki należy spełnić?

            Adopcja zwierząt to wspaniała okazja, aby pomóc bezdomnym i potrzebującym zwierzętom oraz wypełnić nasze życie miłością i przyjaźnią. Jednak przed podjęciem decyzji o adopcji ważne jest, aby wiedzieć, jakie warunki należy spełnić oraz jakie kroki należy podjąć, aby proces adopcyjny przebiegł sprawnie i zakończył się sukcesem.

            Jakie warunki należy spełnić?

            Przede wszystkim, przed podjęciem decyzji o adopcji, należy dokładnie przemyśleć swoje możliwości i zastanowić się, czy jesteśmy w stanie zapewnić zwierzęciu odpowiednie warunki życia oraz wszelką potrzebną opiekę. Należy pamiętać, że adopcja to zobowiązanie na długie lata i wymaga poświęcenia czasu i uwagi.

            W przypadku adopcji psa, ważne jest, aby posiadać odpowiednio duże mieszkanie lub dom z ogrodem, a także czas na regularne spacery oraz opiekę nad zwierzęciem. W przypadku adopcji kota, należy zapewnić mu miejsce, w którym będzie mógł swobodnie się poruszać oraz wysokie miejsca, na których będzie mógł odpocząć.

            Niezbędne jest także posiadanie środków finansowych na pokrycie kosztów związanych z utrzymaniem zwierzęcia, takich jak karmienie, wizyty u weterynarza oraz ewentualne leczenie w przypadku choroby.

            </p>
            <Button href="/adoptuj" variant="primary">Zobacz zwierzęta do adopcji</Button>
          </section>
        </Col>
        <Col sm={6} className="text-center my-auto">
          <img src={adoptImage1} alt="placeholder" className="img-fluid mb-3"/>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="text-center my-auto">
          <img src={adoptImage1} alt="placeholder" className="img-fluid mb-3"/>
        </Col>
        <Col sm={6}>
          <section className="py-5 bg-light">
            <h2 className="mb-4">Wstępna adopcja</h2>
            <p>
            Wstępna adopcja zwierząt to proces, który pozwala na tymczasowe umieszczenie zwierzęcia w domu potencjalnego właściciela, zanim zostanie podjęta ostateczna decyzja o adopcji. Ten rodzaj adopcji ma na celu zapewnienie zwierzęciu tymczasowego domu, umożliwiając mu dostosowanie się do nowych warunków i określenie, czy jest to właściwy dom dla niego.

            Wstępna adopcja to także okazja dla potencjalnego właściciela, aby zapoznać się z zachowaniem i charakterem zwierzęcia oraz określić, czy jest w stanie zapewnić mu odpowiednią opiekę i warunki życia. Wiele schronisk i organizacji zajmujących się adopcją oferuje wstępną adopcję, aby pomóc zwierzęciu znaleźć odpowiedni dom oraz zminimalizować liczbę zwierząt wracających do schronisk.
            </p>
            <Button variant="primary">Dowiedz się więcej</Button>
          </section>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <section className="py-5">
            <h2 className="mb-4">Wychodzenie z psami ze schroniska na spacer</h2>
            <p>
            Wychodzenie z psami ze schroniska na spacer to nie tylko dobra okazja, aby zapewnić zwierzęciu ruch i wyprowadzić je z zamkniętego pomieszczenia, ale również szansa na to, aby zaoferować mu miłość i uwagę. Schroniska dla zwierząt zazwyczaj zapraszają wolontariuszy do wychodzenia z psami na spacery, co może być również wspaniałą okazją do znalezienia nowego przyjaciela. W trakcie spaceru z psem można zobaczyć jego charakter, potrzeby i zachowania, co może pomóc w podjęciu decyzji o adopcji. Wychodzenie z psami ze schroniska to także świetny sposób na spędzenie wolnego czasu na świeżym powietrzu, a przy okazji pomaganie potrzebującym zwierzętom.
            </p>
            <Button variant="primary">Zarezerwuj spacer</Button>
          </section>
        </Col>
        <Col sm={6} className="text-center my-auto">
          <img src={adoptImage1} alt="placeholder" className="img-fluid mb-3"/>
        </Col>
      </Row>
    </Container>
  );
};

export default AdopcjaPsa;