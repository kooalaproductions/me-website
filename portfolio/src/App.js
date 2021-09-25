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

   
          <Route exact path="/me-website">
            <Home></Home>
          </Route>
          <Route exact path="/me-website/projects">
            <Projects></Projects>
          </Route>

          <Route exact path="/me-website/about">
           <About></About>
          </Route>
          <Route exact path="/me-website/contact">
           <Contact></Contact>
          </Route>
          
        </Switch>

        </div>
    
    </div>
    </Router>
  );
}

export default App;
