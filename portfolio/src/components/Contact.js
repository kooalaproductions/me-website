import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navigation from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ckrdzb9', 'template_dn82f11', form.current, 'user_v1LaNe51Mf1gtwqeHKPH7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <>
    <Container>


                     <Row>
                        <Navigation></Navigation>
                        </Row>  

                        <Container>
                            <Row>
                                <Col className='container-email'>
                                
                                <Card style={{ width: '50%'}}>
                                    <Card.Body className='contact-body'>
                                        <Card.Title>Contact</Card.Title>
                                        <form ref={form} onSubmit={sendEmail}>
                                    <div className='name-field'>
                                        <label className='name-label'>Name</label>
                                        <input className='name-input' type="text" name="from_name" id="from_name"/>    
                                    </div>
                                    <div className='email-field'>
                                        <label className='email-label'>Email</label>
                                        <input className='email-input' type="email" name="user_email" />
                                    </div>
                                    <div className='message-field'>
                                        <label className='message-label'>Message</label>
                                        <textarea  name="message" className='message-area'/> 
                                    </div>
                                    <div className='submit-field'>
                                    <input className='submit-button' type="submit" value="Send" />
                                    </div>
                                 
                                </form>
                                    </Card.Body>
                                </Card>
                                </Col>
                           
                            </Row>

                                 
                            </Container> 
       

    </Container>
   </>
  );
};