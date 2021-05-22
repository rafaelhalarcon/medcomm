import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import SignupForm from "../components/SignupForm";

const RegistrationPage = () => {

    let [username, setUsername] = useState()
    let [saveError, setSaveError] = useState();

    let history = useHistory();
    const { userId } = useParams()

    useEffect(() => {
        const getUsername = async () => {
            let response = await fetch("/register/"+username);
            let data = await response.json();
            setUsername(data);
        }
        getUsername();
    }, [username]);
        
    let onSave = async (updatedSignupForm) => {
        try {
            let postResponse = await fetch('/register/'+username, {
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
                history.push("/register/"+username)
            }
        }
        catch (error) {
            // the server cannot be reached
            console.error('Fetch failed to reach the server.')
        }
    }

    return (
        <SignupForm
            onSave={onSave}
            saveError={saveError}
            saveButtonCaption="Create User"
            username={username.username} 
            firstName={username.firstName} 
            lastName={username.lastName} 
            password={username.password}
            avatar={username.avatar}
            birthDate={username.birthDate} 
            registrationDate={username.registrationDate}
            addressStreetNumber={username.addressStreetNumber}
            addressStreetName={username.addressStreetName}
            addressPostalCode={username.addressPostalCode}
            addressTown={username.addressTown}
            addressProvince={username.addressProvince}
            phoneNumber={username.phoneNumber}
            email={username.email}
            genderIdentity={username.genderIdentity}
            specialty={username.specialty}
            practiceType={username.practiceType}
            activeStatus={username.activeStatus}
            cpsaStanding={username.cpsaStanding}
        />
    )
}

export default RegistrationPage;