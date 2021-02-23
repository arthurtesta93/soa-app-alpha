import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PlanoDiretorComponent() {
  return (
    <Container fluid>
      <p className="plano-diretor-title">Plano diretor</p>
      <Row>
        <Col>
          <Form.Label>Largura</Form.Label>
          <Form.Control placeholder="Largura (metros)" />
        </Col>
        <Col>
          <Form.Label>Profundidade</Form.Label>
          <Form.Control placeholder="Profundidade (metros)" />
        </Col>{" "}
        <Col>
          <Form.Label>Aproveitamento</Form.Label>
          <Form.Control placeholder="Índice de aproveitamento" />
        </Col>
        <Col>
          <Form.Label>Aproveitamento máximo</Form.Label>
          <Form.Control placeholder="Índice de aproveitamento máximo" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label>Solo criado</Form.Label>
          <Form.Control placeholder="Solo criado(m²)" />
        </Col>
        <Col>
          <Form.Label>Altura máxima</Form.Label>
          <Form.Control placeholder="Altura máxima (metros)" />
        </Col>

        <Col>
          <Form.Label>Altura máxima divisa</Form.Label>
          <Form.Control placeholder="Altura máxima divisa (metros)" />
        </Col>
        <Col>
          <Form.Label>Altura máxima base</Form.Label>
          <Form.Control placeholder="Altura máxima base (metros)" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <Form.Label>Recuo frontal</Form.Label>
          <Form.Control placeholder="Recuo frontal (metros)" />
        </Col>

        <Col>
          <Form.Group>
            <Form.Label style={{ marginBottom: "25px" }}>
              Taxa de ocupação (%)
            </Form.Label>
            <Form.Control type="range" placeholder="Taxa de ocupação (%)" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default PlanoDiretorComponent;
