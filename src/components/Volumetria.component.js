import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function VolumetriaComponent(props) {
  const [estacionamentoCheck, setEstacionamentoCheck] = useState(false);

  const onEstacionamentoCheck = (value) => {
    const intValue = value === true ? 1 : 0;
    if (value) {
      props.handleJobObjectChange("confirmaEstacionamento", intValue);
    } else {
      props.handleJobObjectChange("recuoLateralEstacionamento", "");
    }

    setEstacionamentoCheck(value);
  };
  return (
    <Container fluid>
      <p className="plano-diretor-title">Volumetria</p>
      <Row>
        <Col>
          <Form.Check
            inline
            required
            name="terms"
            label="Estacionamento"
            onChange={(e) => onEstacionamentoCheck(e.target.checked)}
          />

          {estacionamentoCheck ? (
            <>
              <Form.Label style={{ marginTop: "10px" }}>
                Recuo estacionamento
              </Form.Label>
              <Form.Control
                style={{ marginTop: "12px" }}
                placeholder="Máximo: 4 (metros)"
                type="number"
                min="2"
                max="4"
                onChange={(e) =>
                  props.handleJobObjectChange(
                    "recuoLateralEstacionamento",
                    e.target.value
                  )
                }
              />
            </>
          ) : null}

          <Form.Label>Avanço recuo jardim</Form.Label>
          <Form.Control
            placeholder="Máximo: 9 (metros)"
            type="number"
            min="0"
            max="9"
            onChange={(e) =>
              props.handleJobObjectChange("avancoRecJardim", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Pé direito (corpo)</Form.Label>
          <Form.Control
            style={{ marginBottom: "35px" }}
            placeholder="Mínimo: 2.1 (metros)"
            type="number"
            min="2.1"
            max="5"
            onChange={(e) =>
              props.handleJobObjectChange("peDireitoMinCorpo", e.target.value)
            }
          />

          <Form.Control
            placeholder="Máximo: 5 (metros)"
            type="number"
            min="2.1"
            max="5"
            onChange={(e) =>
              props.handleJobObjectChange("peDireitoMaxCorpo", e.target.value)
            }
          />

          <Form.Label>Largura mínima corpo</Form.Label>
          <Form.Control
            placeholder="Min: 4 Max: 10 (metros)"
            type="number"
            min="4"
            max="10"
            onChange={(e) =>
              props.handleJobObjectChange("larguraMinimaCorpo", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Pé direito (base)</Form.Label>
          <Form.Control
            style={{ marginBottom: "35px" }}
            placeholder="Mínimo: 2.1 (metros)"
            type="number"
            min="2.1"
            max="5"
            onChange={(e) =>
              props.handleJobObjectChange("peDireitoMinBase", e.target.value)
            }
          />

          <Form.Control
            placeholder="Máximo: 5 (metros)"
            type="number"
            min="2.1"
            max="5"
            onChange={(e) =>
              props.handleJobObjectChange("pedireitoMaxBase", e.target.value)
            }
          />

          <Form.Label>Área (base)</Form.Label>
          <Form.Control
            placeholder="Máximo: 100 (metros)"
            type="number"
            min="0"
            max="100"
            onChange={(e) =>
              props.handleJobObjectChange("areaBase", e.target.value)
            }
          />
          <Form.Label>Área reservada</Form.Label>
          <Form.Control
            placeholder="Máximo: 999 (metros)"
            type="number"
            min="0"
            max="999"
            onChange={(e) =>
              props.handleJobObjectChange("areaReservada", e.target.value)
            }
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}

export default VolumetriaComponent;
