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
    <div>
      <h1>Signup form</h1>
            <form onSubmit={onSaveClicked}>
                <input type="text" id="email" name="email" placeholder=" " value={inputEmail} onChange={(event) => onInputChange(event, setInputEmail)} required />
                <label htmlFor="email">Email (username)</label>
                <input type="password" id="password" name="password" placeholder=" " value={inputPassword} onChange={(event) => onInputChange(event, setInputPassword)} required />
                <label htmlFor="password" >Password</label>
        <button className="button">{saveButtonCaption}</button>
        {saveError && <div>{saveError}</div>}
      </form>
      </div>
  );
};

export default LoginForm;
