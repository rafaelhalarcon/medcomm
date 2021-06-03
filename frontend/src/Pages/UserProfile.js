import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import SignupForm from "../components/SignupForm"

const userId = localStorage.getItem("user");
fetch(`/api/user/getById/${userId}`);

const UserProfile = () =>
{
    return(
        <div>

        </div>
    )
}

export default UserProfile