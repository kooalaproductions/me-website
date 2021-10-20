import React, { Component } from 'react';

import Navigation from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import contactImg from '../images/contact-page-background.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/thankyou.css';


 
class ThankYouEmail extends Component{

    render(){
        return (
            <>

            
             

             <Container>

                    <Row>
                    <Navigation></Navigation>
                    </Row>  

                    <Container>
                        <p className='thankyou-p'> Thank you for contacting me! I will reply to you within the next 24 hours.</p>
                    </Container>

                </Container>
            </>

          );
        };
         
    }
 
export default ThankYouEmail;