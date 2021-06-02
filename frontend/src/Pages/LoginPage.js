import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import LoginForm from "../components/LoginForm";

const UNKNOWN = "unknown";
const LoginPage = () => {
  //   let [userCredentials, setUserCredentials] = useState({});
  let [saveError, setSaveError] = useState();

  let history = useHistory();

  //   useEffect(() => {
  //     console.log("User credentials");
  //     console.log(userCredentials);
  //     const getUserCredentials = async () => {
  //       let response = await fetch("/api/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(userCredentials),
  //       });
  //       let data = await response.json();
  //       setUserCredentials(data);
  //     };
  //     getUserCredentials();
  //   }, [userId, userCredentials]);

  let onSave = async (loginCredentials) => {
    console.log(loginCredentials);
    try {
      let postResponse = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginCredentials),
      });
      // the server didn't like the data for some reason
      console.log("Create response is", postResponse);
      if (postResponse.status !== 200) {
        let errorMessage = await postResponse.text();
        console.log("We had an error.  it was: ", errorMessage);
        setSaveError(errorMessage);
      } else {
        const userData = await postResponse.json();
        localStorage.setItem("user", userData.user.id);
        setSaveError(undefined);
        // go back to the list view!
        history.push("/userprofile");
      }
    } catch (error) {
      // the server cannot be reached
      console.error("Fetch failed to reach the server.");
    }
  };

  return (
    <LoginForm
      onSave={onSave}
      saveError={saveError}
      saveButtonCaption="Login"
      //   userName={userCredentials?.userName || UNKNOWN}
      //   password={userCredentials?.password || UNKNOWN}
    />
  );

  //return(
  //  <div className="col-md-6 login-form-2">
  //    <h3>Med-Com Login</h3>
  //  <form>
  //    <div className="form-group">
  //      <input type="text" className="form-control" placeholder="Your Email *" value="" />
  //         </div>
  //         <div className="form-group">
  //             <input type="password" className="form-control" placeholder="Your Password *" value="" />
  //         </div>
  //         <div className="form-group">
  //             <input type="submit" className="btnSubmit" value="Login" />
  //         </div>
  //         <div className="form-group">

  //             <a href="#" className="ForgetPwd" value="Login">Forget Password?</a>
  //         </div>
  //     </form>
  // </div>
  //)
};

export default LoginPage;
