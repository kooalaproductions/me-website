import React, { Component } from 'react'

import Navigation from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css';



class Home extends Component{
    render(){
        return(
        
            <>
           <Container>
                    <Row>
                    <Navigation></Navigation>
                    </Row>   
                    <Row>
                        <h1 className="header-home-welcome">WELCOME TO MY PORTFOLIO</h1>
                    </Row>
                   
                </Container>
            </>
        )
    }
}

export default Home;