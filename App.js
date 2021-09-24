import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './portfolio/src/components/Home';
import Projects from './portfolio/src/components/Projects';



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
