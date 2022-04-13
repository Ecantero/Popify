import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './Components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
      </div>
    </Router>

  );
}

export default App;
