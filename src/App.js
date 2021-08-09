
import './App.css';


import ValidationStudents from './Components/ValidationStudents';
import DisplayStudent from './Components/DisplayStudent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingHeader from './Components/LandingHeader';
import Login from './Components/Login/Login';
import Routes from './routes';

function App() {
  return (
    <>
    <Router>
      <LandingHeader/>
      <div style={{marginTop:'80px'}}>
      <Switch> 
      <Routes/>
    </Switch>
      </div>

    
</Router>
</>
  );
}

export default App;
