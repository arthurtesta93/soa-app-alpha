import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import FormContainer from "./container/Form.container";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="LOGO SOA3.png" alt="logo" width="600" height="150" />
        <div className="form-container">
          <FormContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
