import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import LoginForm from "../components/Login";

const UNKNOWN = "unknown";
const LoginPage = () => {

    let [userCredentials, setUserCredentials] = useState({});
    let [saveError, setSaveError] = useState();

    let history = useHistory();
    //const { userCredentials } = useParams();

    useEffect(() => {
        console.log("User credentials")
        console.log(userCredentials);
        const getUsername = async () => {
            let response = await fetch("api/login/"+userCredentials._id);
            let data = await response.json();
            setUserCredentials(data);
        }
        getUsername();
    }, [userCredentials]);
        
    let onSave = async (updatedSignupForm) => {
        console.log(updatedSignupForm);
        try {
            let postResponse = await fetch('/api/login/'+userCredentials._id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userCredentials)
            })
            // the server didn't like the data for some reason
            console.log('Create response is', postResponse)
            if (postResponse.status !== 200) {
                let errorMessage = await postResponse.text()
                console.log('We had an error.  it was: ', errorMessage)
                setSaveError(errorMessage)
            }
            else {
                setSaveError(undefined)
                // go back to the list view!
                history.push("/signup/register/"+userCredentials._id)
            }
        }
        catch (error) {
            // the server cannot be reached
            console.error('Fetch failed to reach the server.')
        }
    }

    return (
        <LoginForm
            onSave={onSave}
            saveError={saveError}
            saveButtonCaption="Login"
            username={userCredentials?.username || UNKNOWN} 
            password={userCredentials?.password || UNKNOWN}
        />
    )

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
}

export default LoginPage;