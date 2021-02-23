import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function EmpreendimentoComponent() {
  return (
    <Container fluid>
      <p className="plano-diretor-title">Empreendimento</p>
      <Row className="mb-3">
        <Col>
          <Form.Label>Tamanho da unidade</Form.Label>
          <Form.Control placeholder="Tamanho da unidade (m²)" />
        </Col>
        <Col>
          <Form.Label>Circulação mínima </Form.Label>
          <Form.Control placeholder="Ao redor da circulação vertical (m)" />
        </Col>{" "}
        <Col>
          <Form.Label>Preço por m²</Form.Label>
          <Form.Control placeholder="Preço por m² (R$)" />
        </Col>
        <Col>
          <Form.Label>Adição de porcentagem</Form.Label>
          <Form.Control placeholder="Adição de porcentagem por andar" />
        </Col>
      </Row>
      <p className="plano-diretor-title">Habitações</p>
      <Row className="mt-3"></Row>
    </Container>
  );
}

export default EmpreendimentoComponent;
