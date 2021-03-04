import { useGoogleLogout } from "react-google-login";
import { message } from "antd";

import * as apiKeys from "../shared/apiKeys";
const clientId = apiKeys.GOOGLE_CLIENT_ID;

function Logout(props) {
  const onLogoutSuccess = (res) => {
    props.onLogout();
    message.success("Obrigado por usar o SOA!");
  };
  const onFailure = (res) => {
    console.log("Logout error", res);
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="logout-button">
      <span className="buttonText">Logout</span>
    </button>
  );
}
export default Logout;
