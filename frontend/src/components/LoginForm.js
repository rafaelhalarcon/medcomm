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
            <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" htmlFor="email" value={inputEmail} onChange={(event) => onInputChange(event, setInputEmail)}>Username (email)</span>
                </div>
                <div className="field-group">
                    <input type="text" className="inputText" required />
                    <span className="floating-label" id="password" htmlFor="password" value={inputPassword} onChange={(event) => onInputChange(event, setInputPassword)}>Password</span>
                </div>
            <button className="button"  onClick={ onSaveClicked }>{saveButtonCaption}</button>
            { saveError && <div>{saveError}</div> }
            </form>
        </div>
    )
};

export default LoginForm;