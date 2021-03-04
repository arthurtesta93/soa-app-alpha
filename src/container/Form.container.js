import { useState } from "react";
import { Result } from "antd";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import PlanoDiretorComponent from "../components/PlanoDiretor.component";
import EmpreendimentoComponent from "../components/Empreendimento.component";
import VolumetriaComponent from "../components/Volumetria.component";

//import * as formValidators from "../shared/formValidators";

const axios = require("axios").default;

const instance = axios.create({
  baseUrl: "http://54.233.182.18:8080/job-queue/",
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "Acess-Control-Allow-Origin": true,
  },
});
function FormContainer(props) {
  const [jobObject, setJobObject] = useState({});
  const [response, setResponse] = useState({});
  const [successAlertShow, setSuccessAlertShow] = useState(false);
  const [errorAlertShow, setErrorAlertShow] = useState(false);

  const handleJobObjectChange = (field, value) => {
    const updatedJobObject = jobObject;

    updatedJobObject[field] = value;
    console.log(updatedJobObject);
    setJobObject(updatedJobObject);
  };

  const requestJobProcess = () => {
    props.setSendingRequest(true);
    // if (formValidators.formFieldsMissing(jobObject)) {
    //   message.error(
    //     "Prencha todos os campos do formulário para que o SOA possa processar o estudo de otimização."
    //   );
    //   props.setSendingRequest(false);
    // } else {
    const updatedJobObject = jobObject;

    updatedJobObject["email"] = props.user.email;
    updatedJobObject["name"] = props.user.name;
    console.log(updatedJobObject);
    setJobObject(updatedJobObject);
    instance
      .post(
        "http://54.233.182.18:8080/job-queue/unprocessed",
        JSON.stringify(jobObject)
      )
      .then((response) => onRequestFinished(response))
      .catch((error) => onRequestError(error));
  };

  const onRequestFinished = (response) => {
    setResponse(response.data);
    setTimeout(function () {
      props.setSendingRequest(false);
      setSuccessAlertShow(true);
    }, 3000);

    setTimeout(function () {
      setSuccessAlertShow(false);
    }, 10000);
  };

  const onRequestError = () => {
    setTimeout(function () {
      props.setSendingRequest(false);
      setErrorAlertShow(true);
    }, 3000);

    setTimeout(function () {
      setErrorAlertShow(false);
    }, 10000);
  };
  return (
    <>
      {successAlertShow ? (
        <Result
          status="success"
          title={`Anote o protocolo: ${response.id}`}
          subTitle={
            "Seu estudo de otimização está a caminho! Os resultados serão processados imediatamente, e você deve recebê-los no e-mail cadastrado em até 20 minutos. Para resolução de problemas, críticas ou sugestões, envie um e-mail para suporte@soa.app.br"
          }
        />
      ) : errorAlertShow ? (
        <Result
          status="error"
          title="Ops, algo deu errado..."
          subTitle="Não conseguimos completar a solicitação neste momento. Tente novamente em alguns minutos, e caso o problema persista, envie um e-mail para suporte@soa.app.br."
        />
      ) : (
        <>
          <Carousel pause={"hover"} interval={200000}>
            <Carousel.Item>
              <PlanoDiretorComponent
                handleJobObjectChange={handleJobObjectChange}
              />
            </Carousel.Item>
            <Carousel.Item>
              <VolumetriaComponent
                handleJobObjectChange={handleJobObjectChange}
              />
            </Carousel.Item>
            <Carousel.Item>
              <EmpreendimentoComponent
                handleJobObjectChange={handleJobObjectChange}
              />
            </Carousel.Item>
          </Carousel>
          <Button
            type="primary"
            onClick={() => requestJobProcess()}
            style={{ marginTop: "150px" }}
            size="lg"
          >
            Solicitar estudo de otimização
          </Button>
        </>
      )}
    </>
  );
}

export default FormContainer;
