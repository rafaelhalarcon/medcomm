import { useState } from "react";

const LoginForm = ({ userName, password, onSave, saveError, saveButtonCaption }) => {

    let [inputUsername, setInputUsername] = useState(userName)
    let [inputPassword, setInputPassword] = useState(password)

    async function onSaveClicked() {
        console.log("User is loging in");
        let inputLogin = {
            userName: inputUsername,
            password: inputPassword
        }
        console.log(inputLogin);
        onSave(inputLogin);
    }
    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);
    };

    let loginUserProfileInvalid = !inputUsername || (inputUsername.trim().lenght === 0);

    return (
        <div className="container">
            <form>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" htmlFor="userName">Username</span>
                            <span className="omrs-input-helper" id="userName" value={inputUsername} onChange={(event) => onInputChange(event, setInputUsername)}>Maximum 25 characters</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <span className="omrs-input-label" htmlFor="password">Password</span>
                            <span className="omrs-input-helper" id="password" value={inputPassword} onChange={(event) => onInputChange(event, setInputPassword)}>Maximum 25 characters</span>
                        </label>
                    </div>
            <button className="button" disabled={ loginUserProfileInvalid } onClick={ onSaveClicked }>{saveButtonCaption}</button>
            { saveError && <div>{saveError}</div> }
            </form>
        </div>
    )
};

export default LoginForm;