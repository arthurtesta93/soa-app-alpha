import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PlanoDiretorComponent(props) {
  const [ocupacaoValue, setOcupacaoValue] = useState(50);

  const onOcupacaoChange = (value) => {
    props.handleJobObjectChange("taxaOcupacao", value);
    setOcupacaoValue(value);
  };

  return (
    <Container fluid>
      <p className="plano-diretor-title">Plano diretor</p>
      <Row>
        <Col>
          <Form.Label>Largura</Form.Label>
          <Form.Control
            placeholder="Máximo: 100 (metros)"
            type="number"
            min="0"
            max="100"
            onChange={(e) =>
              props.handleJobObjectChange("largura", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Profundidade</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="100"
            placeholder="Máximo: 100 (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("profundidade", e.target.value)
            }
          />
        </Col>{" "}
        <Col>
          <Form.Label>Aproveitamento</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="9"
            placeholder="Máximo: 9"
            onChange={(e) =>
              props.handleJobObjectChange("indiceAp", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Recuo frontal</Form.Label>
          <Form.Control
            placeholder="Máximo: 15 (metros)"
            type="number"
            min="1"
            max="15"
            onChange={(e) =>
              props.handleJobObjectChange("recuoFrontal", e.target.value)
            }
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label>Solo criado</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="9999"
            placeholder="Máximo: 9999 (m²)"
            onChange={(e) =>
              props.handleJobObjectChange("soloCriado", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Altura máxima</Form.Label>
          <Form.Control
            placeholder="Máximo: 100 (metros)"
            type="number"
            min="0"
            max="100"
            onChange={(e) =>
              props.handleJobObjectChange("alturaMax", e.target.value)
            }
          />
        </Col>

        <Col>
          <Form.Label>Altura máxima divisa</Form.Label>
          <Form.Control
            placeholder="Máximo: 20 (metros)"
            type="number"
            min="0"
            max="20"
            onChange={(e) =>
              props.handleJobObjectChange("altMaxDiv", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Altura máxima base</Form.Label>
          <Form.Control
            placeholder="Máximo: 20 (metros)"
            type="number"
            min="0"
            max="20"
            onChange={(e) =>
              props.handleJobObjectChange("altMaxBase", e.target.value)
            }
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3} />
        <Col>
          <Form.Group>
            <Form.Label style={{ marginBottom: "25px" }}>
              Taxa de ocupação (%)
            </Form.Label>
            <Form.Control
              type="range"
              placeholder={"Taxa de ocupação" + ocupacaoValue + "%"}
              onChange={(e) => onOcupacaoChange(e.target.value)}
            />
            {ocupacaoValue + "%"}
          </Form.Group>
        </Col>
        <Col xs={3} />
      </Row>
    </Container>
  );
}

export default PlanoDiretorComponent;
