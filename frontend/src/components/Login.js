import { useState } from "react";

const LoginForm = ({ username, password, onSave, saveError, saveButtonCaption }) => {

let [ inputUsername, setInputUserName ] = useState(username)
let [ inputPassword, setInputPassword ] = useState(password)

async function onSaveClicked() {
    console.log("User is loging in");
    let updatedSignupForm = {
};