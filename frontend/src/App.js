import "./App.css";
import logo from "./commed_2_1.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
// import Messaging from "./Pages/Messaging";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Your trusted source in communication <br />
            from Doctor to Doctor.
          </p>
          <a><Link to="/login">Login</Link>&nbsp;&nbsp;<Link to="/register">Signup</Link></a>
        </header>
        <Switch>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          {/* <Route path="/user/:userId/edit">
      <UserEditPage />
    </Route>
    <Route path="/user/:userId">
      <UserProfile />
    </Route>*/}
          <Route path="/login">
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
