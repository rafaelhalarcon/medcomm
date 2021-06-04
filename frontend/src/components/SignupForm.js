import { useState } from "react";

import "./SignupForm.css";

const SignupForm = ({ firstName, lastName, password, repeatedPassword, avatar, birthDate, registrationDate, addressStreetNumber, addressStreetName, addressPostalCode, addressTown, addressProvince, phoneNumber, email, genderIdentity, specialty, practiceType, activeStatus, cpsaStanding, onSave, saveError, saveButtonCaption }) => {
    let [updatedEmail, setUpdatedEmail] = useState("pedro@gmail.com");
    let [updatedPassword, setUpdatedPassword] = useState("Evolve_U");
    let [updatedRepeatedPassword, setUpdatedRepeatedPassword] = useState("Evolve_U");
    let [updatedFirstName, setUpdatedFirstName] = useState("Pedro");
    let [updatedLastName, setUpdatedLastName] = useState("Pedro");
    let [updatedAvatar, setUpdatedAvatar] = useState();
    let [updatedBirthDate, setUpdatedBirthDate] = useState();
    let [updatedRegistrationDate, setUpdatedRegistrationDate] = useState();
    let [updatedAddressStreetNumber, setUpdatedAddressStreetNumber] = useState("2222");
    let [updatedAddressStreetName, setUpdatedAddressStreetName] = useState("22 ave");
    let [updatedAddressPostalCode, setUpdatedAddressPostalCode] = useState("T3H-4L8");
    let [updatedAddressTown, setUpdatedAddressTown] = useState("Calgary");
    let [updatedAddressProvince, setUpdatedAddressProvince] = useState("Alberta");
    let [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("4031234567");
    let [updatedGenderIdentity, setUpdatedGenderIdentity] = useState("Male");
    let [updatedSpecialty, setUpdatedSpecialty] = useState("Proctologist");
    let [updatedPracticeType, setUpdatedPracticeType] = useState("Private");
    let [updatedActiveStatus, setUpdatedActiveStatus] = useState("Active");
    let [updatedCpsaStanding, setUpdatedCpsaStanding] = useState("159753");


    function onSaveClicked(ev) {
        console.log("User profile has been created");
        let updatedSignupForm = {
            email: updatedEmail,
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
            genderIdentity: updatedGenderIdentity,
            specialty: updatedSpecialty,
            practiceType: updatedPracticeType,
            activeStatus: updatedActiveStatus,
            cpsaStanding: updatedCpsaStanding
        }
        console.log(updatedSignupForm);
        onSave(updatedSignupForm);
        ev.preventDefault();


    }
    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);

    };

    let createUserProfileInvalid = !updatedEmail || (updatedEmail.trim().lenght === 0);

    return (
        <div className="container">
            <h1>Signup form</h1>
            <form >
                <input type="text" id="email" name="email" placeholder=" " value={updatedEmail} onChange={(event) => onInputChange(event, setUpdatedEmail)}  />
                <label htmlFor="email" >Email</label>
                <input type="password" id="password" name="password" placeholder=" " value={updatedPassword} onChange={(event) => onInputChange(event, setUpdatedPassword)}  />
                <label htmlFor="password" >Password</label>
                <input type="text" id="repeatedPassword" name="repeatedPassword" placeholder=" " value={updatedRepeatedPassword} onChange={(event) => onInputChange(event, setUpdatedRepeatedPassword)}  />
                <label htmlFor="repeatedPassword" >Repeat password</label>
                <input type="text" id="firstName" name="firstName" placeholder=" " value={updatedFirstName} onChange={(event) => onInputChange(event, setUpdatedFirstName)}  />
                <label htmlFor="firstName" >First name</label>
                <input type="text" id="lastName" name="lastName" placeholder=" " value={updatedLastName} onChange={(event) => onInputChange(event, setUpdatedLastName)}  />
                <label htmlFor="lastName" >Last name</label>
                <input type="file" id="avatar" name="avatar" placeholder="" value={updatedAvatar} onChange={(event) => onInputChange(event, setUpdatedAvatar)}  />
                <label htmlFor="avatar" >Avatar</label><br />
                <input type="date" id="birthDate" name="birthDate" placeholder="" value={updatedBirthDate} onChange={(event) => onInputChange(event, setUpdatedBirthDate)} />
                <label htmlFor="birthDate" >Birthdate</label><br />
                <div > Address</div>
                <input type="text" id="addressStreetNumber" name="addressStreetNumber" placeholder=" " value={updatedAddressStreetNumber} onChange={(event) => onInputChange(event, setUpdatedAddressStreetNumber)}  />
                <label htmlFor="addressStreetNumber"  >Street number</label>
                <input type="text" id="addressStreetName" name="addressStreetName" placeholder=" " value={updatedAddressStreetName} onChange={(event) => onInputChange(event, setUpdatedAddressStreetName)}  />
                <label htmlFor="addressStreetName" >Street name</label>
                <input type="text" id="addressPostalCode" name="addressPostalCode" placeholder=" " value={updatedAddressPostalCode} onChange={(event) => onInputChange(event, setUpdatedAddressPostalCode)}  />
                <label htmlFor="addressPostalCode" >Postal code ___-___</label>
                <input type="text" id="addressTown" name="addressTown" placeholder=" " value={updatedAddressTown} onChange={(event) => onInputChange(event, setUpdatedAddressTown)}  />
                <label htmlFor="addressTown" >Town</label>
                <input type="text" id="addressProvince" name="addressProvince" placeholder=" " value={updatedAddressProvince} onChange={(event) => onInputChange(event, setUpdatedAddressProvince)}  />
                <label htmlFor="addressProvince" >Province</label>
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder=" " value={updatedPhoneNumber} onChange={(event) => onInputChange(event, setUpdatedPhoneNumber)}  />
                <label htmlFor="phoneNumber" >Phone number (include area code)</label>
                <br /><br /><br />
                <div> &nbsp;&nbsp;  Gender Identity</div>
                <input type="radio" id="male" name="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event, setUpdatedGenderIdentity)} />
                <label htmlFor="genderIdentity">Male</label>
                <input type="radio" id="female" name="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event, setUpdatedGenderIdentity)} />
                <label htmlFor="genderIdentity">Female</label>
                <input type="radio" id="nonBinary" name="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event, setUpdatedGenderIdentity)} />
                <label htmlFor="genderIdentity">Non-binary</label>
                <input type="radio" id="preferNotDisclose" name="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event, setUpdatedGenderIdentity)} />
                <label htmlFor="genderIdentity">Prefer not to disclose</label><br /><br />
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

                <span> &nbsp;&nbsp;  Practice type </span><br />
                <input type="radio" id="public" name="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)} />
                <label htmlFor="public">Public</label>
                <input type="radio" id="private" name="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)} />
                <label htmlFor="private">Private</label>

                <span> &nbsp;&nbsp;  Active Status </span><br />
                <input type="radio" id="active" name="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)} />
                <label htmlFor="active">Active</label>
                <input type="radio" id="retired" name="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)} />
                <label htmlFor="retired">Retired</label>

                <input type="text" id="cpsaStanding" name="cpsaStanding" placeholder=" " value={updatedCpsaStanding} onChange={(event) => onInputChange(event, setUpdatedCpsaStanding)}  />
                <label htmlFor="cpsaStanding">CPSA registry number (6 digits)</label>
                <button className="button" disabled={createUserProfileInvalid} onClick={onSaveClicked}>{saveButtonCaption}</button>
                <button className="button">Cancel</button>
                {saveError && <div>{saveError}</div>}
            </form>
        </div >

    )
}

export default SignupForm;