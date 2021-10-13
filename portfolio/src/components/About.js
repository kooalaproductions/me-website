import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/about.css';


 
class About extends Component{

    render(){
        return (
            <>
            <Container>
                     <Row>
                     <Navigation></Navigation>
                     </Row>   
                     <Row></Row>
                   
 
                     <Container>
                         <Row>
                             <Col>
                             <h1 className='about-title'>ABOUT ME</h1>
                                 </Col>
                         </Row>
                         <Row>
                             <Col>

                             Thank you for visiting my portfolio. I am currently looking for jobs in computer science. 

                             </Col>
                             <Col>
                             My Skills
                             </Col>
                         </Row>
                     </Container>
                    
                 </Container>
             </>
          );
        };
         
    }
 
export default About;