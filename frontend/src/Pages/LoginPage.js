import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import LoginForm from "../components/Login";

const LoginPage = () => {

    let [inputCredentials, setInputCredentials] = useState({});
    let [saveError, setSaveError] = useState();

    let history = useHistory();
    //const { userId } = useParams();

    useEffect(() => {
        console.log("User credentials")
        console.log(userRecord);
        const getUsername = async () => {
            let response = await fetch("api/register/"+userRecord._id);
            let data = await response.json();
            setUserRecord(data);
        }
        getUsername();
    }, [userRecord]);
        
    let onSave = async (updatedSignupForm) => {
        console.log(updatedSignupForm);
        try {
            let postResponse = await fetch('/signup/register/'+userRecord._id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedSignupForm)
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
                history.push("/signup/register/"+userRecord._id)
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
            username={userRecord?.username || UNKNOWN} 
            firstName={userRecord?.firstName || UNKNOWN} 
            lastName={userRecord?.lastName || UNKNOWN} 
            password={userRecord?.password || UNKNOWN}
            avatar={userRecord?.avatar || UNKNOWN}
            birthDate={userRecord?.birthDate || UNKNOWN} 
            registrationDate={userRecord?.registrationDate || UNKNOWN}
            addressStreetNumber={userRecord?.addressStreetNumber || UNKNOWN}
            addressStreetName={userRecord?.addressStreetName || UNKNOWN}
            addressPostalCode={userRecord?.addressPostalCode || UNKNOWN}
            addressTown={userRecord?.addressTown || UNKNOWN}
            addressProvince={userRecord?.addressProvince || UNKNOWN}
            phoneNumber={userRecord?.phoneNumber || UNKNOWN}
            email={userRecord?.email || UNKNOWN}
            genderIdentity={userRecord?.genderIdentity || UNKNOWN}
            specialty={userRecord?.specialty || UNKNOWN}
            practiceType={userRecord?.practiceType || UNKNOWN}
            activeStatus={userRecord?.activeStatus || UNKNOWN}
            cpsaStanding={userRecord?.cpsaStanding || UNKNOWN}
        />
    )

    //return(
      //  <div class="col-md-6 login-form-2">
        //    <h3>Med-Com Login</h3>
          //  <form>
            //    <div class="form-group">
              //      <input type="text" class="form-control" placeholder="Your Email *" value="" />
        //         </div>
        //         <div class="form-group">
        //             <input type="password" class="form-control" placeholder="Your Password *" value="" />
        //         </div>
        //         <div class="form-group">
        //             <input type="submit" class="btnSubmit" value="Login" />
        //         </div>
        //         <div class="form-group">

        //             <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
        //         </div>
        //     </form>
        // </div>
//)
}

export default LoginPage;