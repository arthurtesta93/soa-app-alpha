import { useGoogleLogin } from "react-google-login";
import { message } from "antd";
import google_logo from "../assets/btn_google_signin_light_normal_web@2x.png";
import * as apiKeys from "../shared/apiKeys";

const clientId = apiKeys.GOOGLE_CLIENT_ID;

function Login(props) {
  const onSuccess = (res) => {
    message.success("Seja bem vindo(a) " + res.profileObj.givenName);

    props.onUserAuth(res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login failed: res" + res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <button onClick={signIn} className="login-button">
      <img src={google_logo} alt="google-logo" className="google-logo" />
    </button>
  );
}

export default Login;
