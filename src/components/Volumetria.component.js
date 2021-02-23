import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function VolumetriaComponent() {
  return (
    <Container fluid>
      <p className="plano-diretor-title">Volumetria</p>
      <Row>
        <Col>
          <Form.Check inline required name="terms" label="Estacionamento" />

          {/* conditional rendering here */}

          <Form.Label style={{ marginTop: "10px" }}>
            Recuo estacionamento
          </Form.Label>
          <Form.Control
            style={{ marginTop: "12px" }}
            placeholder="Recuo estacionamento (metros)"
          />

          <Form.Label>Avanço recuo jardim</Form.Label>
          <Form.Control placeholder="Avanço recuo jardim (metros)" />
        </Col>
        <Col>
          <Form.Label>Pé direito (corpo)</Form.Label>
          <Form.Control
            style={{ marginBottom: "35px" }}
            placeholder="Mínimo (metros)"
          />

          <Form.Control placeholder="Máximo (metros)" />

          <Form.Label>Largura mínima corpo</Form.Label>
          <Form.Control placeholder="Largura mínima corpo (metros)" />
        </Col>
        <Col>
          <Form.Label>Pé direito (base)</Form.Label>
          <Form.Control
            style={{ marginBottom: "35px" }}
            placeholder="Mínimo (metros)"
          />

          <Form.Control placeholder="Máximo (metros)" />

          <Form.Label>Área base</Form.Label>
          <Form.Control placeholder="Largura mínima corpo (metros)" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}

export default VolumetriaComponent;
