import React, { Component } from 'react'

import Navigation from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/projects.css';
import mheelsImage from '../images/mheels-pic.png';
import beermeImage from '../images/beerme-pic.png';
import pregameImage from '../images/pre-game-pic.png';
import trainImage from '../images/train-pic.png';



class Projects extends Component{
    render(){
        return(
        
            <>
           <Container className="full-body-projects-container">
                    <Row>
                    <Navigation></Navigation>
                    </Row>   
                    <Container>
                        <Row>
                            <Col> <h1 className="projects-title">PROJECTS</h1></Col>
                        </Row>
                    </Container>
                   
                    <Container className="row-container">
                        
                    <Row className="card-row">
                        
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={mheelsImage}/>
                                <Card.Body>
                                <Card.Title>Mheels</Card.Title>
                                <Card.Text>
                                Mheels is the one stop app to find your nearest food-truck / food on cart that could be around your corner. Ability to use google maps for directions to food locaiton.
                                </Card.Text>
                                <Container className="button-container">
                                <Button onClick={()=> window.open("https://mheels.herokuapp.com/", "_blank")}>Live Project</Button>
                                <Button onClick={()=> window.open("https://github.com/rgonz166/project3", "_blank")}>Github</Button>
                                </Container>
                                
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={beermeImage} />
                                <Card.Body>
                                <Card.Title>Beer Me</Card.Title>
                                <Card.Text>
                                Social Media Application that helps liquour enthusiasts share their love for a certain brand of alchohol. They will be able to create post and read facts about alchohol.
                                </Card.Text>
                                <Container className="button-container">
                                <Button onClick={()=> window.open("http://beerme-ucsd.herokuapp.com/", "_blank")}>Live Project</Button>
                                <Button onClick={()=> window.open("https://github.com/rgonz166/BeerMe", "_blank")}>Github</Button>
                                </Container>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                        <Row className="card-row">
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={pregameImage} />
                                <Card.Body>
                                <Card.Title>Pre-Game</Card.Title>
                                <Card.Text>
                                Pre-Game was created with the intention of you having a great start to your night. Enter the venue/location you'll attend to find all the nearby local spots.
                                </Card.Text>
                                <Container className="button-container">
                                <Button onClick={()=> window.open("https://rgonz166.github.io/Pre-Game/", "_blank")}>Live Project</Button>
                                <Button onClick={()=> window.open("https://github.com/rgonz166/Pre-Game", "_blank")}>Github</Button>
                                </Container>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={trainImage} />
                                <Card.Body>
                                <Card.Title>Train Scheduler</Card.Title>
                                <Card.Text>
                                Application that can help the user create a post of upcoming train or trolley schedules. Will create a train name, destination, train arrival and frequency.
                                If there was a mistake the user can simply remove it.
                                </Card.Text>
                                <Container className="button-container">
                                <Button onClick={()=> window.open("https://kooalaproductions.github.io/TrainTime/", "_blank")}>Live Project</Button>
                                <Button onClick={()=> window.open("https://github.com/kooalaproductions/TrainTime", "_blank")}>Github</Button>
                                </Container>
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

export default Projects;