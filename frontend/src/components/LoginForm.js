import { useState } from "react";

const LoginForm = ({
  email,
  password,
  onSave,
  saveError,
  saveButtonCaption,
}) => {
  let [inputEmail, setInputEmail] = useState(email);
  let [inputPassword, setInputPassword] = useState(password);
  console.log(inputEmail);

  function onSaveClicked(event) {
    event.preventDefault();
    console.log("User is loging in");
    let inputLogin = {
      email: inputEmail,
      password: inputPassword,
    };
    console.log(inputLogin);
    onSave(inputLogin);
  }
  const onInputChange = (event, setFunction) => {
    console.log("Changing input to be ", event.target.value);
    setFunction(event.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={onSaveClicked}>
        <div className="field-group">
          <input
            type="text"
            className="inputText"
            required
            value={inputEmail}
            onChange={(event) => onInputChange(event, setInputEmail)}
          />
          <span className="floating-label" htmlFor="email">
            Username (email)
          </span>
        </div>
        <div className="field-group">
          <input
            type="password"
            className="inputText"
            required
            value={inputPassword}
            onChange={(event) => onInputChange(event, setInputPassword)}
          />
          <span className="floating-label" id="password" htmlFor="password">
            Password
          </span>
        </div>
        <button className="button">{saveButtonCaption}</button>
        {saveError && <div>{saveError}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
