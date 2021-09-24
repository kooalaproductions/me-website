import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contact.css';


 
class Contact extends Component{

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
                             <h1 className='contact-title'>CONTACT PAGE</h1>
                                 </Col>
                         </Row>
                     </Container>
                    
                 </Container>
             </>
          );
        };
         
    }
 
export default Contact;