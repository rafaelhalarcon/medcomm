import { useState } from "react";

import "./SignupForm.css";

const SignupForm = ({ userName, firstName, lastName, password, repeatedPassword, avatar, birthDate, registrationDate, addressStreetNumber, addressStreetName, addressPostalCode, addressTown, addressProvince, phoneNumber, email, genderIdentity, specialty, practiceType, activeStatus, cpsaStanding, onSave, saveError, saveButtonCaption }) => {
    let [updatedUsername, setUpdatedUsername] = useState(userName);
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
            <div className="field-group">
                <h1>Signup form</h1>
            </div>
            <form>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" htmlFor="userName" value={updatedUsername} onChange={(event) => onInputChange(event, setUpdatedUsername)}>Username</span>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="password" htmlFor="password" value={updatedPassword} onChange={(event) => onInputChange(event, setUpdatedPassword)}>Password</span>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="repeatedPassword" value={updatedRepeatedPassword} onChange={(event) => onInputChange(event, setUpdatedRepeatedPassword)}>Repeat password</span>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="firstName" htmlFor="firstName" value={updatedFirstName} onChange={(event) => onInputChange(event, setUpdatedFirstName)}>First name</span>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="lastName" htmlFor="lastName" value={updatedLastName} onChange={(event) => onInputChange(event, setUpdatedLastName)}>Last name</span>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="birthDate" htmlFor="birthDate" value={updatedBirthDate} onChange={(event) => onInputChange(event, setUpdatedBirthDate)}>Birthdate yyyy-mm-dd</span>
                </div>
                <div > Address
        <div className="field-group">
                        <input type="text" className="inputText" required />
                        <span className="floating-label" id="addressStreetNumber" html="addressStreetNumber" value={updatedAddressStreetNumber} onChange={(event) => onInputChange(event, setUpdatedAddressStreetNumber)}>Street number</span>
                    </div>
                    <div className="field-group">
                        <input type="text" className="inputText" required />
                        <span className="floating-label" id="addressStreetName" htmlFor="addressStreetName" value={updatedAddressStreetName} onChange={(event) => onInputChange(event, setUpdatedAddressStreetName)}>Street name</span>
                    </div>
                    <div className="field-group">
                        <input type="text" className="inputText" required />
                        <span className="floating-label" id="addressPostalCode" htmlFor="addressPostalCode" value={updatedAddressPostalCode} onChange={(event) => onInputChange(event, setUpdatedAddressPostalCode)}>Postal code ___-___</span>
                    </div>
                    <div className="field-group">
                        <input type="text" className="inputText" required />
                        <span className="floating-label" id="addressTown" htmlFor="addressTown" value={updatedAddressTown} onChange={(event) => onInputChange(event, setUpdatedAddressTown)}>Town</span>
                    </div>
                    <div className="field-group">
                        <input type="text" className="inputText" required />
                        <span className="floating-label" id="addressProvince" htmlFor="addressProvince" value={updatedAddressProvince} onChange={(event) => onInputChange(event, setUpdatedAddressProvince)}>Province</span>
                    </div>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="phoneNumber" htmlFor="phoneNumber" value={updatedPhoneNumber} onChange={(event) => onInputChange(event, setUpdatedPhoneNumber)}>Phone number (include area code)</span>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="email" htmlFor="email" value={updatedEmail} onChange={(event) => onInputChange(event, setUpdatedEmail)}>Email</span>
                </div>
                <div class="field-group">
                    <span> &nbsp;&nbsp;  Gender Identity</span>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" id="nonBinary" name="gender" value="nonBinary" />
                    <label htmlFor="other">Non-binary</label>
                    <input type="radio" id="preferNotDisclose" name="gender" value="preferNotDisclose" />
                    <label htmlFor="other">Prefer not to disclose</label>
                </div>
                <div className="field-group">
                    <div>
                    <select className="inputText" id="specialty" value={updatedSpecialty} onChange={(event) => onInputChange(event, setUpdatedSpecialty)}>
                        <option className="floating-label" value="anatomicalPathology">Anatomical Pathology</option>
                        <option className="floating-label" value="anesthesiology">Anesthesiology</option>
                        <option className="floating-label" value="cardiology">Cardiology</option>
                        <option className="floating-label" value="cardiovascular">Cardiovalscular/Thoracic surgery</option>
                        <option className="floating-label" value="immunology">Immunology</option>
                        <option className="floating-label" value="criticalCare">Critical Care</option>
                        <option className="floating-label" value="dermatology">Dermatology</option>
                        <option className="floating-label" value="radiology">Radiology</option>
                        <option className="floating-label" value="emergencyMedicine">Emergency medicine</option>
                        <option className="floating-label" value="endocrinology">Endocrinology</option>
                        <option className="floating-label" value="familyMedicine">Family Medicine</option>
                        <option className="floating-label" value="gastroenterology">Gastroenterology</option>
                        <option className="floating-label" value="generalInternalMedicine">General Internal Medicine</option>
                        <option className="floating-label" value="generalSurgery">General surgery</option>
                        <option className="floating-label" value="clinicalPathology">Clinical Pathology</option>
                        <option className="floating-label" value="geriatricMedicine">Geriatric Medicine</option>
                        <option className="floating-label" value="hematology">Hematology</option>
                        <option className="floating-label" value="biochemistry">Biochemistry</option>
                        <option className="floating-label" value="genetics">Genetics</option>
                        <option className="floating-label" value="microbiologyInfectious">Microbiology and Infectious Diseases</option>
                        <option className="floating-label" value="oncology">Oncology</option>
                        <option className="floating-label" value="nephrology">Nephrology</option>
                        <option className="floating-label" value="neurology">Neurology</option>
                        <option className="floating-label" value="neurosurgery">Neurosurgery</option>
                        <option className="floating-label" value="nuclearMedicine">Nuclear Medicine</option>
                        <option className="floating-label" value="obstetricsGynecologist">Obstetrics/Gynecologist</option>
                        <option className="floating-label" value="occupationalMedicine">Occupational Medicine</option>
                        <option className="floating-label" value="ophtalmology">Ophtalmology</option>
                        <option className="floating-label" value="orthopedicSurgery">ORthopedic Surgery</option>
                        <option className="floating-label" value="otolaryngology">Otolaryngology</option>
                        <option className="floating-label" value="pediatrics">Pediatrics</option>
                        <option className="floating-label" value="physMedRehab">Physical Medicina and Rehabilitation</option>
                        <option className="floating-label" value="plasticSurgery">Plastic Surgery</option>
                        <option className="floating-label" value="psychiatry">Psychiatry</option>
                        <option className="floating-label" value="pubHealth">Public Health and Preventive Medicine</option>
                        <option className="floating-label" value="respirology">Respirology</option>
                        <option className="floating-label" value="rheumatology">Rheumatology</option>
                        <option className="floating-label" value="urology">Urology</option>
                    </select>
                    </div>
                    <span>Specialty</span>
                </div>
                <div class="field-group">
                    <span> &nbsp;&nbsp;  Practice type </span>
                    <input type="radio" id="public" name="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)} />
                    <label htmlFor="public">Public</label>
                    <input type="radio" id="private" name="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)} />
                    <label htmlFor="private">Private</label>
                </div>
                <div class="field-group">
                    <span> &nbsp;&nbsp;  Practice type </span>
                    <input type="radio" id="active" name="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)} />
                    <label htmlFor="active">Active</label>
                    <input type="radio" id="retired" name="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)} />
                    <label htmlFor="retired">Retired</label>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="cpsaStanding" htmlFor="cpsaStanding" value={updatedCpsaStanding} onChange={(event) => onInputChange(event, setUpdatedCpsaStanding)}>CPSA registry number (6 digits)</span>
                </div>
                <button className="button" disabled={createUserProfileInvalid} onClick={onSaveClicked}>{saveButtonCaption}</button>
                <button className="button">Cancel</button>
                {saveError && <div>{saveError}</div>}
            </form>
        </div>

    )
}

export default SignupForm;