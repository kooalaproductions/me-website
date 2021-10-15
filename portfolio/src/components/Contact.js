import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                                <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="from_name" id="from_name"/>
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" /> 
                                <input type="submit" value="Send" />
                                </form>
                                </Col>
                           
                            </Row>

                                 
                            </Container> 
       

    </Container>
   </>
  );
};