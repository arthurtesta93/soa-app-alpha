import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import PlanoDiretorComponent from "../components/PlanoDiretor.component";
import EmpreendimentoComponent from "../components/Empreendimento.component";
import VolumetriaComponent from "../components/Volumetria.component";
function FormContainer() {
  //create form object and onChange methods here
  //dispatch from here

  const [jobObject, setJobObject] = useState({});

  const handleJobObjectChange = (field, value) => {
    const updatedJobObject = jobObject;

    updatedJobObject[field] = value;
    console.log(updatedJobObject);
    setJobObject(updatedJobObject);
  };

  return (
    <Carousel pause={"hover"} interval={200000}>
      <Carousel.Item>
        <PlanoDiretorComponent handleJobObjectChange={handleJobObjectChange} />
      </Carousel.Item>
      <Carousel.Item>
        <VolumetriaComponent handleJobObjectChange={handleJobObjectChange} />
      </Carousel.Item>
      <Carousel.Item>
        <EmpreendimentoComponent
          handleJobObjectChange={handleJobObjectChange}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default FormContainer;
