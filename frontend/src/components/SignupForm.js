import { useState } from "react";

import "./SignupForm.css";

const SignupForm = ({ userName, firstName, lastName, password, repeatedPassword, avatar, birthDate, registrationDate, addressStreetNumber, addressStreetName, addressPostalCode, addressTown, addressProvince, phoneNumber, email, genderIdentity, specialty, practiceType, activeStatus, cpsaStanding, onSave, saveError, saveButtonCaption }) => {
    let [updatedUsername, setUpdatedUsername] = useState();
    let [updatedPassword, setUpdatedPassword] = useState();
    let [updatedRepeatedPassword, setUpdatedRepeatedPassword] = useState();
    let [updatedFirstName, setUpdatedFirstName] = useState();
    let [updatedLastName, setUpdatedLastName] = useState();
    let [updatedAvatar, setUpdatedAvatar] = useState();
    let [updatedBirthDate, setUpdatedBirthDate] = useState();
    let [updatedRegistrationDate, setUpdatedRegistrationDate] = useState();
    let [updatedAddressStreetNumber, setUpdatedAddressStreetNumber] = useState();
    let [updatedAddressStreetName, setUpdatedAddressStreetName] = useState();
    let [updatedAddressPostalCode, setUpdatedAddressPostalCode] = useState();
    let [updatedAddressTown, setUpdatedAddressTown] = useState();
    let [updatedAddressProvince, setUpdatedAddressProvince] = useState();
    let [updatedPhoneNumber, setUpdatedPhoneNumber] = useState();
    let [updatedEmail, setUpdatedEmail] = useState();
    let [updatedGenderIdentity, setUpdatedGenderIdentity] = useState();
    let [updatedSpecialty, setUpdatedSpecialty] = useState();
    let [updatedPracticeType, setUpdatedPracticeType] = useState();
    let [updatedActiveStatus, setUpdatedActiveStatus] = useState();
    let [updatedCpsaStanding, setUpdatedCpsaStanding] = useState();


    async function onSaveClicked() {
        console.log("User profile has been created");
        let updatedSignupForm = {
            userName: updatedUsername,
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
        <div className="container">
            <h1>Signup form</h1>
            <form >
                <input type="text" id="userName" name="userName" placeholder=" " value={updatedUsername} onChange={(event) => onInputChange(event, setUpdatedUsername)} required />
                <label htmlFor="userName">Username</label>
                <input type="password" id="password" name="password" placeholder=" " value={updatedPassword} onChange={(event) => onInputChange(event, setUpdatedPassword)} required />
                <label htmlFor="password" >Password</label>
                <input type="text" id="repeatedPassword" name="repeatedPassword" placeholder=" " value={updatedRepeatedPassword} onChange={(event) => onInputChange(event, setUpdatedRepeatedPassword)} required />
                <label htmlFor="repeatedPassword" >Repeat password</label>
                <input type="text" id="firstName" name="firstName" placeholder=" " value={updatedFirstName} onChange={(event) => onInputChange(event, setUpdatedFirstName)} required />
                <label htmlFor="firstName" >First name</label>
                <input type="text" id="lastName" name="lastName" placeholder=" " value={updatedLastName} onChange={(event) => onInputChange(event, setUpdatedLastName)} required />
                <label htmlFor="lastName" >Last name</label>
                <input type="file" id="avatar" name="avatar" placeholder="" value={updatedAvatar} onChange={(event) => onInputChange(event, setUpdatedAvatar)} required />
                <label htmlFor="avatar" >Avatar</label><br />
                <input type="date" id="birthDate" name="birthDate" placeholder="" value={updatedBirthDate} onChange={(event) => onInputChange(event, setUpdatedBirthDate)} required />
                <label htmlFor="birthDate" >Birthdate</label><br />
                <div > Address</div>
                <input type="text" id="addressStreetNumber" name="addressStreetNumber" placeholder=" " value={updatedAddressStreetNumber} onChange={(event) => onInputChange(event, setUpdatedAddressStreetNumber)} required />
                <label htmlFor="addressStreetNumber"  >Street number</label>
                <input type="text" id="addressStreetName" name="addressStreetName" placeholder=" " value={updatedAddressStreetName} onChange={(event) => onInputChange(event, setUpdatedAddressStreetName)} required />
                <label htmlFor="addressStreetName" >Street name</label>

                <input type="text" id="addressPostalCode" name="addressPostalCode" placeholder=" " value={updatedAddressPostalCode} onChange={(event) => onInputChange(event, setUpdatedAddressPostalCode)} required />
                <label htmlFor="addressPostalCode" >Postal code ___-___</label>

                <input type="text" id="addressTown" name="addressTown" placeholder=" " value={updatedAddressTown} onChange={(event) => onInputChange(event, setUpdatedAddressTown)} required />
                <label htmlFor="addressTown" >Town</label>

                <input type="text" id="addressProvince" name="addressProvince" placeholder=" " value={updatedAddressProvince} onChange={(event) => onInputChange(event, setUpdatedAddressProvince)} required />
                <label htmlFor="addressProvince" >Province</label>

                <input type="text" id="phoneNumber" name="phoneNumber" placeholder=" " value={updatedPhoneNumber} onChange={(event) => onInputChange(event, setUpdatedPhoneNumber)} required />
                <label htmlFor="phoneNumber" >Phone number (include area code)</label>

                <input type="text" id="email" name="email" placeholder=" " value={updatedEmail} onChange={(event) => onInputChange(event, setUpdatedEmail)} required />
                <label htmlFor="email" >Email</label><br /><br /><br />
                <div> &nbsp;&nbsp;  Gender Identity</div>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" id="nonBinary" name="gender" value="nonBinary" />
                <label htmlFor="other">Non-binary</label>
                <input type="radio" id="preferNotDisclose" name="gender" value="preferNotDisclose" />
                <label htmlFor="other">Prefer not to disclose</label><br /><br />
                <span>Specialty</span>
                <select className="inputText" id="specialty" value={updatedSpecialty} onChange={(event) => onInputChange(event, setUpdatedSpecialty)}>
                    <option value="anatomicalPathology">Anatomical Pathology</option>
                    <option value="anesthesiology">Anesthesiology</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="cardiovascular">Cardiovalscular/Thoracic surgery</option>
                    <option value="immunology">Immunology</option>
                    <option value="criticalCare">Critical Care</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="radiology">Radiology</option>
                    <option value="emergencyMedicine">Emergency medicine</option>
                    <option value="endocrinology">Endocrinology</option>
                    <option value="familyMedicine">Family Medicine</option>
                    <option value="gastroenterology">Gastroenterology</option>
                    <option value="generalInternalMedicine">General Internal Medicine</option>
                    <option value="generalSurgery">General surgery</option>
                    <option value="clinicalPathology">Clinical Pathology</option>
                    <option value="geriatricMedicine">Geriatric Medicine</option>
                    <option value="hematology">Hematology</option>
                    <option value="biochemistry">Biochemistry</option>
                    <option value="genetics">Genetics</option>
                    <option value="microbiologyInfectious">Microbiology and Infectious Diseases</option>
                    <option value="oncology">Oncology</option>
                    <option value="nephrology">Nephrology</option>
                    <option value="neurology">Neurology</option>
                    <option value="neurosurgery">Neurosurgery</option>
                    <option value="nuclearMedicine">Nuclear Medicine</option>
                    <option value="obstetricsGynecologist">Obstetrics/Gynecologist</option>
                    <option value="occupationalMedicine">Occupational Medicine</option>
                    <option value="ophtalmology">Ophtalmology</option>
                    <option value="orthopedicSurgery">ORthopedic Surgery</option>
                    <option value="otolaryngology">Otolaryngology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="physMedRehab">Physical Medicina and Rehabilitation</option>
                    <option value="plasticSurgery">Plastic Surgery</option>
                    <option value="psychiatry">Psychiatry</option>
                    <option value="pubHealth">Public Health and Preventive Medicine</option>
                    <option value="respirology">Respirology</option>
                    <option value="rheumatology">Rheumatology</option>
                    <option value="urology">Urology</option>
                </select>

                <spanspan> &nbsp;&nbsp;  Practice type </spanspan><br />
                <input type="radio" id="public" name="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)} />
                <label htmlFor="public">Public</label>
                <input type="radio" id="private" name="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)} />
                <label htmlFor="private">Private</label>

                <span> &nbsp;&nbsp;  Active Status </span><br />
                <input type="radio" id="active" name="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)} />
                <label htmlFor="active">Active</label>
                <input type="radio" id="retired" name="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)} />
                <label htmlFor="retired">Retired</label>

                <input type="text" id="cpsaStanding" name="cpsaStanding" placeholder=" " value={updatedCpsaStanding} onChange={(event) => onInputChange(event, setUpdatedCpsaStanding)} required />
                <label htmlFor="cpsaStanding">CPSA registry number (6 digits)</label>
                <button className="button" disabled={createUserProfileInvalid} onClick={onSaveClicked}>{saveButtonCaption}</button>
                <button className="button">Cancel</button>
                {saveError && <div>{saveError}</div>}
            </form>
        </div >

    )
}

export default SignupForm;