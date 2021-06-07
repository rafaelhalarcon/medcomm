import { useState, useEffect } from 'react'

import SignupForm from "../components/SignupForm"

const ownerProfile = ({ ownerProfileId }) =>
{
    const [ownerProfile, setOwnerProfile] = useState (
        {
            userName = "",
            lastName = "",
            firstName = ""
        })
    //following Tony's code
    useEffect(() => 
    {
        const getProfile = async() =>
        {
            let response = await fetch("/api/user/UserProfile")
            let data = await response.json()

            setOwnerProfile(data)
        }
        getProfile()
    },[ownerProfileId])

    return (
        <div className = "container">
            <nav className = "navbar navbar-expand-lg">
               <div className = "container-fluid">
                   <div>
                    <a className = "navbar-brand" href = "#">
                        Med-Com
                    </a>
                    </div>
                <ul>
                    <li className = "active">
                        <a href = "#">
                            Home
                        </a>
                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link" href = "#">
                            Message
                        </a>
                    </li>
                    <li className = "nav-item">
                        <a className = "nav-link" href = "#">
                            About
                        </a>
                    </li>
                    <li className = "nav-item dropdown">
                        <a className = "nav-link dropdown-toogle" href = "#" id = "navbarDropdown"
                        role = "button" data-toggle = "dropdown" aria-haspopup = "true" aria-expanded = "false">
                            Settings
                        </a>
                        <div className = "dropdown-menu" aria-labelledby = "navbarDropdown">
                            <a className = "dropdown-item" href = "#">Edit Page</a>
                            <a className = "dropdown-item" href = "#">Network</a>
                            <div className = "dropdown-divider"></div>
                            <a className = "dropdown-item" href = "#">Logout</a>
                        </div>
                    </li>
                </ul>

                <form className = "form-inline my-2 my-lg-0">
                    <input className = "form-control mr-sm-2" type = "search" placeholder = "Search"
                    aria-label = "Search"/>
                    <button className = "btn btn-outline-sucess my-2 my-sm-0" type = "submit">
                        Search
                    </button>
                </form>

                </div> 
            </nav>
        </div>
    )
}

export default ownerProfile;