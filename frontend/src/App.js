import "./App.css";
import logo from "./commed_2_1.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import axios from "axios";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import UserProfile from "./Pages/UserProfile"
// import Messaging from "./Pages/Messaging";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/register">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Your trusted source in communication from Doctor to Doctor.
          <div>
            <Link to="/login">Login</Link>&nbsp;&nbsp;
            <Link to="/register">Signup</Link>
          </div>
        </header>
            <RegistrationPage />
          </Route>
          {/* <Route path="/userprofile">
      <UserEditPage />
  </Route>*/}
    <Route exact path="/userprofile">
      <UserProfile />
    </Route>
           <Route path="/login">
           <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          Your trusted source in communication from Doctor to Doctor.
          <div>
            <Link to="/login">Login</Link>&nbsp;&nbsp;
            <Link to="/register">Signup</Link>
          </div>
        </header>
            <LoginPage />
          </Route>
           {/* <Route path="/Messaging">
          <Messaging />
        </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
