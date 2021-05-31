import { useState } from "react";

const LoginForm = ({ email, password, onSave, saveError, saveButtonCaption }) => {

    let [inputEmail, setInputEmail] = useState(email)
    let [inputPassword, setInputPassword] = useState(password)

    async function onSaveClicked() {
        console.log("User is loging in");
        let inputLogin = {
            email: inputEmail,
            password: inputPassword
        }
        console.log(inputLogin);
        onSave(inputLogin);
    }
    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);
    };

    let loginUserProfileInvalid = !inputEmail || (inputEmail.trim().lenght === 0);

    return (
        <div className="container">
            <form>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" htmlFor="email">Email</span>
                            <span className="omrs-input-helper" id="Email" value={inputEmail} onChange={(event) => onInputChange(event, setInputEmail)}>Maximum 25 characters</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" htmlFor="password">Password</span>
                            <span className="omrs-input-helper" id="password" value={inputPassword} onChange={(event) => onInputChange(event, setInputPassword)}>Maximum 25 characters</span>
                        </label>
                    </div>
            <button className="button"  onClick={ onSaveClicked }>{saveButtonCaption}</button>
            { saveError && <div>{saveError}</div> }
            </form>
        </div>
    )
};

export default LoginForm;