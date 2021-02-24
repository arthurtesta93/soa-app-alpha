import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import _ from "lodash";

function EmpreendimentoComponent() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [metragemHabitacao, setMetragemHabitacao] = useState(0);
  const [porcentagemHabitacao, setPorcentagemHabitacao] = useState(0);
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
      setHabitacoes(updatedHabitacoes);
      setMetragemHabitacao(null);
      setPorcentagemHabitacao(null);
      setShow(false);
    }
  };

  const handleRemoveHabitacao = (habitacao) => {
    const updatedHabitacoes = [...habitacoes];
    updatedHabitacoes.splice(habitacao);
    setHabitacoes(updatedHabitacoes);
  };

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
        </Col>
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
      <Row className="mt-3">
        <Col>
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
                <p className="habitacao-label">
                  Habitação {key + 1} : {habitacao.metragem} m² /{" "}
                  {habitacao.porcentagem}%
                </p>
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