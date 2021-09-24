import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';



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

          <Route exact path="/about">
           <About></About>
          </Route>
          <Route exact path="/contact">
           <Contact></Contact>
          </Route>
          
        </Switch>

        </div>
    
    </div>
    </Router>
  );
}

export default App;
