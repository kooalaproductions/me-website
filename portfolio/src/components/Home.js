import React, { Component, useState } from 'react'

import Navigation from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css';
import portfolioPic from '../images/portfolio-pic.jpeg';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

}

class Home extends Component{

    
    render(){
        return(
        
            <>
           <Container>
                    <Row>
                    <Navigation></Navigation>
                    </Row>   
                   
                    <Container className='profile-container'>
                        <Row>

                        <Col><Card.Img className="profile-pic" variant="top" src={portfolioPic} alt="Avatar"/></Col>
                    

                    
                    
                    <Col xs={8}>
                    <Card className="card-whole">
                        <Card.Body>
                            <Card.Title>Ernesto Sanchez Santana</Card.Title>
                            <Card.Text>
                            Bachelor of Science in Computer Science from San Diego State University
                            </Card.Text>
                            <Card.Text>
                            San Diego, CA
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                        
                   
                            
                    
                        </Row>
                    </Container>
                   
                </Container>
            </>
        )
    }
}

export default Home;