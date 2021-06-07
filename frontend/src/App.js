import "./App.css";
import logo from "./commed_2_1.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import Messaging from "./Pages/Messaging";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <header className="App-header">
            Your trusted source in communication from Doctor to Doctor.
            <div>
              <Link to="/login">Login</Link>&nbsp;&nbsp;
              <Link to="/register">Signup</Link>
            </div>
          </header>
          <Switch>
            <Route exact path="/register">
              <RegistrationPage />
            </Route>
            {/* <Route path="/userprofile">
      <UserEditPage />
  </Route>
    <Route exact path="/userProfile">
      <UserProfile />
    </Route>*/}
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/messaging">
              <Messaging />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
