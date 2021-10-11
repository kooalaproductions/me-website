import React, { Component, useState } from 'react'

import Navigation from './Navbar';
import ResumeBttn from './ResumeButton';
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
import Modal from 'react-bootstrap/Modal';


class Home extends Component{

    constructor(props) {
        super(props);
  
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
             open:true

           };
      }

  openModal() {
     this.setState({open: this.props.openModal});
  }

  closeModal() {
     this.setState({open:false});
  }

    render(){
        return(
        
            <>

            <div className='img-container'>
            <Image className ='lake-img' src={backgroundLake} />
            </div>
          

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

                                    <ResumeBttn></ResumeBttn>
                                    
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}><Card.Img className="profile-pic" variant="top" src={portfolioPic} alt="Avatar"/></Col>
                    
                           
                            
                        </Row>

                    <Modal open={this.state.open}  animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </Container>
                   
                   
                </Container>
            </>
        )
    }
}

export default Home;