import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Spin } from "antd";

import FormContainer from "./container/Form.container";
function App() {
  const [sendingRequest, setSendingRequest] = useState(false);

  return (
    <Spin
      spinning={sendingRequest}
      tip="Seu estudo de otimização está sendo solicitado. Obrigado por utilizar o SOA!"
    >
      <div className="App">
        <header className="App-header">
          <img src="LOGO SOA3.png" alt="logo" width="600" height="150" />
          <div className="form-container">
            <FormContainer
              sendingRequest={sendingRequest}
              setSendingRequest={setSendingRequest}
            />
          </div>
        </header>
      </div>
    </Spin>
  );
}

export default App;
