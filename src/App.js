import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation} from './components/Navigation';
import { Login } from './components/pages/Login';
// import { Sidenav } from './components/Sidenav.js';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Login/>
      </div>
    </Router>

  );
}

export default App;
