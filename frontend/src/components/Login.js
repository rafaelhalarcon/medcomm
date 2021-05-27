import { useState } from "react";

const LoginForm = ({ username, password, onSave, saveError, saveButtonCaption }) => {

    let [inputUsername, setInputUsername] = useState(username)
    let [inputPassword, setInputPassword] = useState(password)

    async function onSaveClicked() {
        console.log("User is loging in");
        let inputLogin = {
            username: inputUsername,
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
        <div>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" value={inputUsername} onChange={(event) => onInputChange(event, setInputUsername)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" value={inputPassword} onChange={(event) => onInputChange(event, setInputPassword)} />
            </div>
            <button disabled={ loginUserProfileInvalid } onClick={ onSaveClicked }>{saveButtonCaption}</button>
            { saveError && <div>{saveError}</div> }
        </div>
    )
};

export default LoginForm;