import { useState } from "react";

const SignupForm = ({ username, firstName, lastName, password, avatar, birthDate, registrationDate, addressStreetNumber, addressStreetName, addressPostalCode, addressTown, addressProvince, phoneNumber, email, genderIdentity, specialty, practiceType, activeStatus, cpsaStanding, onSave, saveError, saveButtonCaption }) => {
    let [updatedUsername, setUpdatedUsername] = useState(username);
    let [updatedFirstName, setUpdatedFirstName] = useState(firstName);
    let [updatedLastName, setUpdatedLastName] = useState(lastName);
    let [updatedPassword, setUpdatedPassword] = useState(password);
    let [updatedAvatar, setUpdatedAvatar] = useState(avatar);
    let [updatedBirthDate, setUpdatedBirthDate] = useState(birthDate);
    let [updatedRegistrationDate, setUpdatedRegistrationDate] = useState(registrationDate);
    let [updatedAddressStreetNumber, setUpdatedAddressStreetNumber] = useState(addressStreetNumber);
    let [updatedAddressStreetName, setUpdatedAddressStreetName] = useState(addressStreetName);
    let [updatedAddressPostalCode, setUpdatedAddressPostalCode] = useState(addressPostalCode);
    let [updatedAddressTown, setUpdatedAddressTown] = useState(addressTown);
    let [updatedAddressProvince, setUpdatedAddressProvince] = useState(addressProvince);
    let [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(phoneNumber);
    let [updatedEmail, setUpdatedEmail] = useState(email);
    let [updatedGenderIdentity, setUpdatedGenderIdentity] = useState(genderIdentity);
    let [updatedSpecialty, setUpdatedSpecialty] = useState(specialty);
    let [updatedPracticeType, setUpdatedPracticeType] = useState(practiceType);
    let [updatedActiveStatus, setUpdatedActiveStatus] = useState(activeStatus);
    let [updatedCpsaStanding, setUpdatedCpsaStanding] = useState(cpsaStanding);
 
    async function onSaveClicked() {
        console.log("User profile has been created");
        let updatedSignupForm = {
            username: updatedUsername, 
            firstName: updatedFirstName, 
            lastName: updatedLastName, 
            password: updatedPassword, 
            avatar: updatedAvatar, 
            birthDate: updatedBirthDate, 
            registrationDate: updatedRegistrationDate, 
            addressStreetNumber: updatedAddressStreetNumber, 
            addressStreetName: updatedAddressStreetName, 
            addressPostalCode: updatedAddressPostalCode, 
            addressTown: updatedAddressTown, 
            addressProvince: updatedAddressProvince, 
            phoneNumber: updatedPhoneNumber, 
            email: updatedEmail, 
            genderIdentity: updatedGenderIdentity, 
            specialty: updatedSpecialty, 
            practiceType: updatedPracticeType, 
            activeStatus: updatedActiveStatus,
            cpsaStanding: updatedCpsaStanding  
        }
        console.log(`Creating user profile with ${updatedSignupForm}`);
        onSave(updatedSignupForm);
    }
    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);
    };

    let createUserProfileInvalid = !updatedUsername || (updatedUsername.trim().lenght === 0);

    return (
        <div>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" value={updatedUsername} onChange={(event) => onInputChange(event,setUpdatedUsername)}/>
            </div>
            <div>
                <label htmlFor="firstName">First name</label>
                <input id="firstName" value={updatedFirstName} onChange={(event) => onInputChange(event,setUpdatedFirstName)}/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" value={updatedLastName} onChange={(event) => onInputChange(event,setUpdatedLastName)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" value={updatedPassword} onChange={(event) => onInputChange(event,setUpdatedPassword)}/>
            </div>
            <div>
                <label htmlFor="avatar">Avatar</label>
                <input id="avatar" value={updatedAvatar} onChange={(event) => onInputChange(event,setUpdatedAvatar)}/>
            </div>
            <div>
                <label htmlFor="birthDate">Birthdate</label>
                <input id="birthDate" value={updatedBirthDate} onChange={(event) => onInputChange(event,setUpdatedBirthDate)}/>
            </div>
            <div>
                <label htmlFor="registrationDate">Registration date</label>
                <input id="registrationDate" value={updatedRegistrationDate} onChange={(event) => onInputChange(event,setUpdatedRegistrationDate)}/>
            </div>
            <div>
                <label htmlFor="addressStreetNumber">Street number</label>
                <input id="addressStreetNumber" value={updatedAddressStreetNumber} onChange={(event) => onInputChange(event,setUpdatedAddressStreetNumber)}/>
            </div>
            <div>
                <label htmlFor="addressStreetName">Street name</label>
                <input id="addressStreetName" value={updatedAddressStreetName} onChange={(event) => onInputChange(event,setUpdatedAddressStreetName)}/>
            </div>
            <div>
                <label htmlFor="addressPostalCode">Postal code</label>
                <input id="addressPostalCode" value={updatedAddressPostalCode} onChange={(event) => onInputChange(event,setUpdatedAddressPostalCode)}/>
            </div>
            <div>
                <label htmlFor="addressTown">Town</label>
                <input id="addressTown" value={updatedAddressTown} onChange={(event) => onInputChange(event,setUpdatedAddressTown)}/>
            </div>
            <div>
                <label htmlFor="addressProvince">Province</label>
                <input id="addressProvince" value={updatedAddressProvince} onChange={(event) => onInputChange(event,setUpdatedAddressProvince)}/>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone number</label>
                <input id="phoneNumber" value={updatedPhoneNumber} onChange={(event) => onInputChange(event,setUpdatedPhoneNumber)}/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input id="email" value={updatedEmail} onChange={(event) => onInputChange(event,setUpdatedEmail)}/>
            </div>
            <div>
                <label htmlFor="genderIdentity">Gender identity</label>
                <input id="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event,setUpdatedGenderIdentity)}/>
            </div>
            <div>
                <label htmlFor="specialty">Specialty</label>
                <input id="specialty" value={updatedSpecialty} onChange={(event) => onInputChange(event,setUpdatedSpecialty)}/>
            </div>
            <div>
                <label htmlFor="practiceType">Practice type</label>
                <input id="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event,setUpdatedPracticeType)}/>
            </div>
            <div>
                <label htmlFor="activeStatus">Active status</label>
                <input id="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event,setUpdatedActiveStatus)}/>
            </div>
            <div>
                <label htmlFor="cpsaStanding">CPSA standing</label>
                <input id="cpsaStanding" value={updatedCpsaStanding} onChange={(event) => onInputChange(event,setUpdatedCpsaStanding)}/>
            </div>
            <button disabled={ createUserProfileInvalid } onClick={ onSaveClicked }>{saveButtonCaption}</button>
            { saveError && <div>{saveError}</div> }            
        </div>
    )
    }

    export default SignupForm;