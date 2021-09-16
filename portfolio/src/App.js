import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';



function App() {
  return (
    <Router>
    <div className="App">
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
          
        </Switch>

        </div>
    
    </div>
    </Router>
  );
}

export default App;
