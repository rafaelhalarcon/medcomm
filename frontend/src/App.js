import logo from './commed_2_1.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage"

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Your trusted source in communication <br />from Doctor to Doctor.
        </p>
        </header>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
        </div>
      </div >
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
      </Switch>
    </Router>
  );
}

export default App;
