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
                             <div className='intro'>
                             Thank you for visiting my portfolio. I am currently looking for jobs in computer science or information technology.
                             I graduated from San Diego State University with a degree in computer science and during that time I was an I.T. Student Worker
                             for the Department of Child Support.
                                 </div>
                            
                             <br></br>
                             
                             <div className='future'>
                             I will continue working on personal projects to continuously work on my skills.
                             My goal is to become a Lead Software Developer or a Senior I.T. Engineer.
                             A programming language that I hope to learn is python because I want to
                             expand my knowledge and be flexible in any job position. I will work on python projects and post them on my portfolio in the future. 


                             </div>
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