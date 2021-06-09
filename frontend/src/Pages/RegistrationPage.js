import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import SignupForm from "../components/SignupForm";

const UNKNOWN = "unknown";
const RegistrationPage = () => {
  let [userRecord, setUserRecord] = useState({});
  let [saveError, setSaveError] = useState();

  let history = useHistory();
  const { userId } = useParams();

  let onSave = async (updatedSignupForm) => {
    console.log("updated signup form");
    console.log(updatedSignupForm);
    try {
      let postResponse = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSignupForm),
      });
      // the server didn't like the data for some reason
      console.log("Create response is", postResponse);
      if (postResponse.status !== 200) {
        let errorMessage = await postResponse.text();
        console.log("We had an error.  it was: ", errorMessage);
        setSaveError(errorMessage);
      } else {
        setSaveError(null);

        const userResponse = await postResponse.json()
        console.log("userResponse", userResponse)
        localStorage.setItem("userid", userResponse.user._id)

        // go back to the list view!
        history.push("/userprofile");
      }
    } catch (err) {
      // the server cannot be reached
      console.error(err);
    }
  };

  return (
    <SignupForm
      onSave={onSave}
      saveError={saveError}
      saveButtonCaption="Create User"
      email={userRecord?.email || UNKNOWN}
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
      genderIdentity={userRecord?.genderIdentity || UNKNOWN}
      specialty={userRecord?.specialty || UNKNOWN}
      practiceType={userRecord?.practiceType || UNKNOWN}
      activeStatus={userRecord?.activeStatus || UNKNOWN}
      cpsaStanding={userRecord?.cpsaStanding || UNKNOWN}
    />
  );
};

export default RegistrationPage;
