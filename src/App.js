import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import logo from "./assets/LOGO_SOA3.png";
import { Spin, Menu } from "antd";

import Login from "./container/Login";
import Logout from "./container/Logout";
import FormContainer from "./container/Form.container";

function App() {
  const [sendingRequest, setSendingRequest] = useState(false);
  const [userAuth, setUserAuth] = useState(false);
  const [user, setUser] = useState({});
  const onUserAuth = (userObj) => {
    setUser({
      name: userObj.name,
      email: userObj.email,
    });
    setUserAuth(true);
  };

  const onLogout = () => {
    setUserAuth(false);
  };
  return (
    <Spin
      spinning={sendingRequest}
      tip="Seu estudo de otimização está sendo solicitado. Obrigado por utilizar o SOA!"
    >
      <header className="App-header">
        <Menu mode="horizontal">
          <Menu.Item key="app">Solicitar otimização</Menu.Item>
          <Menu.Item key="read">Visualizar relatório</Menu.Item>
          <Menu.Item key="geo">Visualizar geometria</Menu.Item>
        </Menu>
        <img src={logo} alt="logo" width="600" height="150" />
      </header>
      <div className="App">
        {!userAuth ? (
          <Login onUserAuth={onUserAuth} />
        ) : (
          <Logout onLogout={onLogout} />
        )}
        {userAuth ? (
          <div className="form-container">
            <FormContainer
              sendingRequest={sendingRequest}
              setSendingRequest={setSendingRequest}
              user={user}
            />
          </div>
        ) : null}
      </div>
    </Spin>
  );
}

export default App;
