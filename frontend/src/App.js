import logo from './commed_2.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your trusted source in communication <br/>from Doctor to Doctor.
        </p>
      </header>
    </div>
  );
}

export default App;
