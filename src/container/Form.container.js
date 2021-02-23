import Carousel from "react-bootstrap/Carousel";

import PlanoDiretorComponent from "../components/PlanoDiretor.component";
import EmpreendimentoComponent from "../components/Empreendimento.component";
import VolumetriaComponent from "../components/Volumetria.component";
function FormContainer() {
  //create form object and onChange methods here
  //dispatch from here

  return (
    <Carousel pause={"hover"} interval={200000}>
      <Carousel.Item>
        <PlanoDiretorComponent />
      </Carousel.Item>
      <Carousel.Item>
        <VolumetriaComponent />
      </Carousel.Item>
      <Carousel.Item>
        <EmpreendimentoComponent />
      </Carousel.Item>
    </Carousel>
  );
}

export default FormContainer;
