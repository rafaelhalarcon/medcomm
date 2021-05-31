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
            <div>
                <h1>Signup form</h1>
                <form>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" htmlFor="userName">Username</span>
                            <span className="omrs-input-helper" id="userName" value={updatedUsername} onChange={(event) => onInputChange(event, setUpdatedUsername)}>Maximum 25 characters</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" htmlFor="password">Password</span>
                            <span className="omrs-input-helper" id="password" value={updatedPassword} onChange={(event) => onInputChange(event, setUpdatedPassword)}>Maximum 25 characters</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Repeat Password</span>
                            <span className="omrs-input-helper" id="repeatedPassword" value={updatedRepeatedPassword} onChange={(event) => onInputChange(event, setUpdatedRepeatedPassword)}>Password must match</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" htmlFor="firstName">First Name</span>
                            <span className="omrs-input-helper" id="firstName" value={updatedFirstName} onChange={(event) => onInputChange(event, setUpdatedFirstName)}></span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Last Name</span>
                            <span className="omrs-input-helper" id="lastName" value={updatedLastName} onChange={(event) => onInputChange(event, setUpdatedLastName)}></span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Registration date</span>
                            <span className="omrs-input-helper" id="registrationDate" value={updatedRegistrationDate} onChange={(event) => onInputChange(event, setUpdatedRegistrationDate)}></span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" type="date">Birthdate</span>
                            <span className="omrs-input-helper" id="birthDate" value={updatedBirthDate} onChange={(event) => onInputChange(event, setUpdatedBirthDate)}>yyyy-mm-dd</span>
                        </label>
                    </div>
                    <div > Address
        <div className="omrs-input-group">
                            <label className="omrs-input-underlined">
                                <input required />
                                <span className="omrs-input-label">Street number</span>
                                <span className="omrs-input-helper" id="addressStreetNumber" value={updatedAddressStreetNumber} onChange={(event) => onInputChange(event, setUpdatedAddressStreetNumber)}>Four or five digits</span>
                            </label>
                        </div>
                        <div className="omrs-input-group">
                            <label className="omrs-input-underlined">
                                <input required />
                                <span className="omrs-input-label">Street name</span>
                                <span className="omrs-input-helper" id="addressStreetName" value={updatedAddressStreetName} onChange={(event) => onInputChange(event, setUpdatedAddressStreetName)}></span>
                            </label>
                        </div>
                        <div className="omrs-input-group">
                            <label className="omrs-input-underlined">
                                <input required />
                                <span className="omrs-input-label">Postal code</span>
                                <span className="omrs-input-helper" id="addressPostalCode" value={updatedAddressPostalCode} onChange={(event) => onInputChange(event, setUpdatedAddressPostalCode)}>___-___</span>
                            </label>
                        </div>
                        <div className="omrs-input-group">
                            <label className="omrs-input-underlined">
                                <input required />
                                <span className="omrs-input-label">Town</span>
                                <span className="omrs-input-helper" id="addressTown" value={updatedAddressTown} onChange={(event) => onInputChange(event, setUpdatedAddressTown)}></span>
                            </label>
                        </div>
                        <div className="omrs-input-group">
                            <label className="omrs-input-underlined">
                                <input required />
                                <span className="omrs-input-label">Province</span>
                                <span className="omrs-input-helper" id="addressProvince" value={updatedAddressProvince} onChange={(event) => onInputChange(event, setUpdatedAddressProvince)}></span>
                            </label>
                        </div>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Phone number</span>
                            <span className="omrs-input-helper" id="phoneNumber" value={updatedPhoneNumber} onChange={(event) => onInputChange(event, setUpdatedPhoneNumber)}>(___)-___-____</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Email</span>
                            <span className="omrs-input-helper" id="email" value={updatedEmail} onChange={(event) => onInputChange(event, setUpdatedEmail)}></span>
                        </label>
                    </div>
                    {/* <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Gender Identity</span>
                            <span className="omrs-input-helper" id="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event, setUpdatedGenderIdentity)}>Select one: Male, Female, Non-binary, Prefer not to disclose</span>
                        </label>
                    </div> */}
                    <div className="omrs-select-group">
                        <label className="omrs-input-underlined">
                            <span className="omrs-select-label">Gender Identity</span>
                            <select className="omrs-select-helper" id="genderIdentity" value={updatedGenderIdentity} onChange={(event) => onInputChange(event, setUpdatedGenderIdentity)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="nonBinary">Non-binary</option>
                                <option value="notDisclose">Prefer not to disclose</option>
                            </select>
                        </label>
                    </div>
                    <div className="omrs-select-group">
                        <label className="omrs-input-underlined">
                            <span className="omrs-select-label">Specialty</span>
                            <select className="omrs-input-helper" id="specialty" value={updatedSpecialty} onChange={(event) => onInputChange(event, setUpdatedSpecialty)}>
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
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Practice type</span>
                            <span className="omrs-input-helper" id="practiceType" value={updatedPracticeType} onChange={(event) => onInputChange(event, setUpdatedPracticeType)}>Public health or Private</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">Active status</span>
                            <span className="omrs-input-helper" id="activeStatus" value={updatedActiveStatus} onChange={(event) => onInputChange(event, setUpdatedActiveStatus)}>Retired or Active</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label">CPSA Standing</span>
                            <span className="omrs-input-helper" id="cpsaStanding" value={updatedCpsaStanding} onChange={(event) => onInputChange(event, setUpdatedCpsaStanding)}>CPSA registry number</span>
                        </label>
                    </div>
                    <button className="button" disabled={createUserProfileInvalid} onClick={onSaveClicked}>{saveButtonCaption}</button>
                    <button className="button">Cancel</button>
                    {saveError && <div>{saveError}</div>}
                </form>
            </div>
        </div >
    )
}

export default SignupForm;