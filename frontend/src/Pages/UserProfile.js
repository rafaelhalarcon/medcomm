import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import './UserProfile.css'

import SignupForm from "../components/SignupForm"

// const userId = localStorage.getItem("user");
// fetch(`/api/user/getById/${userId}`);

const UserProfile = () =>
{
    const [profile, setProfile] = useState(
        {
            email: "",
            lastName: "",
            firstName: ""
        }
    )

    useEffect(() => 
    {
        const getProfile = async () =>
        {
            let userid = localStorage.getItem("userid")
            let response = await fetch("/userProfile/getById/" + userid) 
            let data = await response.json()
            setProfile(data)
        }
        getProfile()
    }, [])

    return(
        <div>
        <div class = "header header-fixed">
            <div class = "navbar container">
                <div class = "logo"><a href = "#home">Med-Comm</a></div>
                <input type = "checkbox" id = "navbar-toggle"></input>
                <label for = "navbar-toggle"><i></i></label>
                <nav class = "menu">
                    <ul>
                        <li><a href = "#messaging">Messages</a></li>
                        <li><a href = "#about">About</a></li>
                        <li><a href = "logout">Logout</a></li>
                    </ul>
                </nav>
            </div>
            <ul>
                 <li>{profile && (<div>{profile.lastName}</div>)}</li>

                 <li>{profile &&(<div>{profile.firstName}</div>)}</li>

                 <li>{profile &&(<div>{profile.phoneNumber}</div>)}</li>

                 {/* <li>{profile &&(<div>{profile.practiceType}</div>)}</li> */}

                 <li>{profile &&(<div>{profile.registrationDate}</div>)}</li>

                 <li>{profile &&(<div>{profile.cpsaStanding}</div>)}</li>   
            </ul>
        </div>
        </div>
        
  )
}


    


export default UserProfile