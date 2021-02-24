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
                placeholder="Recuo estacionamento (metros)"
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
            placeholder="Avanço recuo jardim (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("avancoRecJardim", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Pé direito (corpo)</Form.Label>
          <Form.Control
            style={{ marginBottom: "35px" }}
            placeholder="Mínimo (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("peDireitoMinCorpo", e.target.value)
            }
          />

          <Form.Control
            placeholder="Máximo (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("peDireitoMaxCorpo", e.target.value)
            }
          />

          <Form.Label>Largura mínima corpo</Form.Label>
          <Form.Control
            placeholder="Largura mínima corpo (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("larguraMinimaCorpo", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Pé direito (base)</Form.Label>
          <Form.Control
            style={{ marginBottom: "35px" }}
            placeholder="Mínimo (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("peDireitoMinBase", e.target.value)
            }
          />

          <Form.Control
            placeholder="Máximo (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("pedireitoMaxBase", e.target.value)
            }
          />

          <Form.Label>Área (base)</Form.Label>
          <Form.Control
            placeholder="Área base (metros)"
            onChange={(e) =>
              props.handleJobObjectChange("areaBase", e.target.value)
            }
          />
          <Form.Label>Área reservada</Form.Label>
          <Form.Control
            placeholder="Área reservada (metros)"
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
