import React, { Component } from 'react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class Navigation extends Component{

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      background: '',
      color:''
  };

  }


 componentDidMount() {
    window.addEventListener('load', this.handleClick);
 }

 componentWillUnmount() { 
   window.removeEventListener('load', this.handleClick)  
 }
  handleLoad(){

  }
  handleClick() {//this does not work bc onclick reloads page so the new changes disappear
    this.setState({background: 'green', color: 'red'});// here I want to change the color to red
    //alert('onClick works');
  }
  /**
   * 
   * what needs to be done is when on windows path then change the color not on click 
   */
    render(){

      const { background, color } = this.state;
        return(
            
        <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" className='header-llc'>PORTFOLIO</Navbar.Brand>
          <GitHubIcon className="github"></GitHubIcon>
          <LinkedInIcon className="linkedin"></LinkedInIcon>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='home' href="/" onClick={this.handleClick} style={{background: background, color: color}}>HOME</Nav.Link>
              <Nav.Link className='projects' href="/projects" onClick={this.handleClick} style={{background: background, color: color}}>PROJECTS</Nav.Link>
              <Nav.Link className='about' href="/about" >ABOUT</Nav.Link>
              <Nav.Link className='contact' href="/contact" >CONTACT</Nav.Link>

              
            </Nav>
            
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
        )
    }
}

export default Navigation;