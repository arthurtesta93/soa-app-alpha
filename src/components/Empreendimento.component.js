import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { Tooltip } from "antd";
import _ from "lodash";

function EmpreendimentoComponent(props) {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [metragemHabitacao, setMetragemHabitacao] = useState(null);
  const [porcentagemHabitacao, setPorcentagemHabitacao] = useState(null);
  const [habitacoes, setHabitacoes] = useState([]);

  const handleModalShow = () => {
    setShow(!show);
    setShowAlert(false);
  };

  const handleAddHabitacao = () => {
    const updatedHabitacoes = [...habitacoes];
    const newHabitacao = {
      porcentagem: porcentagemHabitacao,
      metragem: metragemHabitacao,
    };

    const currentPercent = _.sumBy(habitacoes, function (hab) {
      return Number(hab.porcentagem);
    });

    if (currentPercent + Number(porcentagemHabitacao) > 100) {
      setShowAlert(true);
    } else {
      updatedHabitacoes.push(newHabitacao);
      props.handleJobObjectChange("habitacoes", updatedHabitacoes);
      setHabitacoes(updatedHabitacoes);
      setMetragemHabitacao(null);
      setPorcentagemHabitacao(null);
      setShow(false);
    }
  };

  const handleRemoveHabitacao = (habitacao) => {
    const updatedHabitacoes = [...habitacoes];
    updatedHabitacoes.splice(habitacao, 1);
    props.handleJobObjectChange("habitacoes", updatedHabitacoes);
    setHabitacoes(updatedHabitacoes);
  };

  return (
    <Container fluid>
      <p className="plano-diretor-title">Empreendimento</p>
      <Row className="mb-3">
        <Col>
          <Form.Label>Tamanho da unidade</Form.Label>
          <Form.Control
            placeholder="Máximo: 999 (m²)"
            type="number"
            min="0"
            max="999"
            onChange={(e) =>
              props.handleJobObjectChange("tamanhoUnidade", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Circulação mínima </Form.Label>
          <Form.Control
            placeholder="Min: 2 Max: 5 (m)"
            type="number"
            min="2"
            max="5"
            onChange={(e) =>
              props.handleJobObjectChange("circulacaoMinima", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Preço por m²</Form.Label>
          <Form.Control
            placeholder="Preço por m² (R$)"
            type="number"
            max="99999"
            onChange={(e) =>
              props.handleJobObjectChange("precoMetroQuadrado", e.target.value)
            }
          />
        </Col>
        <Col>
          <Form.Label>Adição de porcentagem</Form.Label>
          <Form.Control
            placeholder="Max: 100"
            type="number"
            min="0"
            max="100"
            onChange={(e) =>
              props.handleJobObjectChange("adicaoPorcentagem", e.target.value)
            }
          />
        </Col>
      </Row>
      <p className="plano-diretor-title">Habitações</p>
      <Row className="mt-3">
        <Col style={{ marginTop: "-55px" }}>
          <Button variant="primary" onClick={handleModalShow}>
            Adicionar habitação
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <div className="habitacoes-list-flex-wrap">
            {_.map(habitacoes, (habitacao, key) => (
              <span
                className="habitacoes-list-content"
                onClick={() => handleRemoveHabitacao(key)}
              >
                <Tooltip title="Clique para remover. Atenção: remover a primeira habitação remove todas as demais">
                  <p className="habitacao-label">
                    Habitação {key + 1} : {habitacao.metragem} m² /{" "}
                    {habitacao.porcentagem}%
                  </p>
                </Tooltip>
              </span>
            ))}
          </div>
        </Col>
      </Row>
      <Modal show={show} onHide={handleModalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar habitação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Adicione a metragem da habitação, e a porcentagem em relação ao total
          de habitações
          <Row>
            <Col>
              <Form.Label>Metragem</Form.Label>
              <Form.Control
                placeholder="m²"
                type="number"
                value={metragemHabitacao}
                onChange={(e) => setMetragemHabitacao(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Porcentagem</Form.Label>
              <Form.Control
                placeholder="%"
                type="number"
                value={porcentagemHabitacao}
                onChange={(e) => setPorcentagemHabitacao(e.target.value)}
              />
            </Col>
          </Row>
          {showAlert ? (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Percentual excedido</Alert.Heading>
              <p>
                A soma do percentual de todas habitações não deve ser maior que
                100%. Verifique as demais habitações adicionadas, e garanta que
                a soma total seja menor ou igual a 100%.
              </p>
            </Alert>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalShow}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleAddHabitacao}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EmpreendimentoComponent;
