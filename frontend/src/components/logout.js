import { useEffect } from "react";
import UserProfile from '../Pages/UserProfile'

const logout = () =>
{
    let postResponse = await fetch("/api/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginCredentials),
      });
}

export default logout
