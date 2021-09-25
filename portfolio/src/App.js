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
        {/* <Switch> */}

   
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>

        {/* </Switch> */}

        </div>
    
    </div>
    </Router>
  );
}

export default App;
