import { useState } from "react";

import "./SignupForm.css";

const SignupForm = ({ username, firstName, lastName, password, repeatedPassword, avatar, birthDate, registrationDate, addressStreetNumber, addressStreetName, addressPostalCode, addressTown, addressProvince, phoneNumber, email, genderIdentity, specialty, practiceType, activeStatus, cpsaStanding, onSave, saveError, saveButtonCaption }) => {
    let [updatedUsername, setUpdatedUsername] = useState(username);
    let [updatedPassword, setUpdatedPassword] = useState(password);
    let [updatedRepeatedPassword, setUpdatedRepeatedPassword] = useState(repeatedPassword);
    let [updatedFirstName, setUpdatedFirstName] = useState(firstName);
    let [updatedLastName, setUpdatedLastName] = useState(lastName);
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
            password: updatedPassword,
            repeatedPassword: updatedRepeatedPassword,
            firstName: updatedFirstName,
            lastName: updatedLastName,
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
        console.log(updatedSignupForm);
        onSave(updatedSignupForm);
    }
    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);
    };

    let createUserProfileInvalid = !updatedUsername || (updatedUsername.trim().lenght === 0);

    return (
        <div class="container">
            <div>
                <h1>Signup form</h1>
                <form>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label" htmlFor="username">Username</span>
                            <span class="omrs-input-helper" id="username" value={updatedUsername} onChange={(event) => onInputChange(event, setUpdatedUsername)}>Maximum 25 characters</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label" htmlFor="password">Password</span>
                            <span class="omrs-input-helper" id="password" value={updatedPassword} onChange={(event) => onInputChange(event, setUpdatedPassword)}>Maximum 25 characters</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Repeat Password</span>
                            <span class="omrs-input-helper" id="repeatedPassword" value={updatedRepeatedPassword} onChange={(event) => onInputChange(event, setUpdatedRepeatedPassword)}>Password must match</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label" htmlFor="firstName">First Name</span>
                            <span class="omrs-input-helper" id="firstName" value={updatedFirstName} onChange={(event) => onInputChange(event, setUpdatedFirstName)}></span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Last Name</span>
                            <span class="omrs-input-helper" id="lastName" value={updatedLastName} onChange={(event) => onInputChange(event, setUpdatedLastName)}></span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Registration date</span>
                            <span class="omrs-input-helper" id="registrationDate" value={updatedRegistrationDate} onChange={(event) => onInputChange(event, setUpdatedRegistrationDate)}></span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label" type="date">Birthdate</span>
                            <span class="omrs-input-helper" id="birthDate" value={updatedBirthDate} onChange={(event) => onInputChange(event, setUpdatedBirthDate)}>yyyy-mm-dd</span>
                        </label>
                    </div>
                    <div > Address
        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                                <input required />
                                <span class="omrs-input-label">Street number</span>
                                <span class="omrs-input-helper" id="addressStreetNumber" value={updatedAddressStreetNumber} onChange={(event) => onInputChange(event, setUpdatedAddressStreetNumber)}>Four or five digits</span>
                            </label>
                        </div>
                        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                                <input required />
                                <span class="omrs-input-label">Street name</span>
                                <span class="omrs-input-helper" id="addressStreetName" value={updatedAddressStreetName} onChange={(event) => onInputChange(event, setUpdatedAddressStreetName)}></span>
                            </label>
                        </div>
                        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                                <input required />
                                <span class="omrs-input-label">Postal code</span>
                                <span class="omrs-input-helper" id="addressPostalCode" value={updatedAddressPostalCode} onChange={(event) => onInputChange(event, setUpdatedAddressPostalCode)}>___-___</span>
                            </label>
                        </div>
                        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                                <input required />
                                <span class="omrs-input-label">Town</span>
                                <span class="omrs-input-helper" id="addressTown" value={updatedAddressTown} onChange={(event) => onInputChange(event, setUpdatedAddressTown)}></span>
                            </label>
                        </div>
                        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                                <input required />
                                <span class="omrs-input-label">Province</span>
                                <span class="omrs-input-helper" id="addressProvince" value={updatedAddressProvince} onChange={(event) => onInputChange(event, setUpdatedAddressProvince)}></span>
                            </label>
                        </div>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Phone number</span>
                            <span class="omrs-input-helper" id="phoneNumber" value={updatedPhoneNumber} onChange={(event) => onInputChange(event, setUpdatedPhoneNumber)}>(___)-___-____</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Email</span>
                            <span class="omrs-input-helper" id="email" value={updatedEmail} onChange={(event) => onInputChange(event, setUpdatedEmail)}></span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Gender Identity</span>
                            <span class="omrs-input-helper" id="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event, setUpdatedGenderIdentity)}>Select one: Male, Female, Non-binary, Prefer not to disclose</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Specialty</span>
                            <span class="omrs-input-helper" id="specialty" value={updatedSpecialty} onChange={(event) => onInputChange(event, setUpdatedSpecialty)}>Select up to four</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Practice type</span>
                            <span class="omrs-input-helper" id="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)}>Public health or Private</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">Active status</span>
                            <span class="omrs-input-helper" id="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)}>Retired or Active</span>
                        </label>
                    </div>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                            <input required />
                            <span class="omrs-input-label">CPSA Standing</span>
                            <span class="omrs-input-helper" id="cpsaStanding" value={updatedCpsaStanding} onChange={(event) => onInputChange(event, setUpdatedCpsaStanding)}>CPSA registry number</span>
                        </label>
                    </div>
                    <button class="button" disabled={createUserProfileInvalid} onClick={onSaveClicked}>{saveButtonCaption}</button>
                    <button class="button">Cancel</button>
                    {saveError && <div>{saveError}</div>}
                </form>
            </div>
        </div >
    )
}

export default SignupForm;