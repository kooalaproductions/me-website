import React, { Component, useState } from 'react'

import Navigation from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import backgroundLake from '../images/lakebackground.jpeg';
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
                         <Image className ='lake-img' src={backgroundLake} />

           <Container className='home-container'>
                    <Row>
                    <Navigation></Navigation>
                    </Row>   
                  
                    <Container className='profile-container'>
                        
                        <Row className="profile-row">

                            <Col xs={8}>
                            <Card className="card-whole">
                                <Card.Body className="body-of-card">
                                    <Card.Title className='name-title'>Hello I am Ernesto Sanchez</Card.Title>
                                    <Card.Text className='school-title'>
                                    Bachelor of Science in Computer Science from San Diego State University
                                    </Card.Text>
                                    <Card.Text className='location-title'>
                                    San Diego, CA
                                    </Card.Text>
                                    <Button className='button-projects'>
                                    <Link className = 'projects-button' to='/projects'> PROJECTS</Link>
                                    </Button>{' '}
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}><Card.Img className="profile-pic" variant="top" src={portfolioPic} alt="Avatar"/></Col>
                    
                           
                            
                        </Row>
                    </Container>
                   
                   
                </Container>
            </>
        )
    }
}

export default Home;