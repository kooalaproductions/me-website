import React, { Component } from 'react'

import Navigation from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/projects.css';



class Projects extends Component{
    render(){
        return(
        
            <>
           <Container>
                    <Row>
                    <Navigation></Navigation>
                    </Row>   
                    <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Mheels</Card.Title>
          <Card.Text>
          Mheels is the one stop app to find your nearest food-truck / food on cart that could be around your corner. Ability to use google maps for directions to food locaiton.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Beer Me</Card.Title>
          <Card.Text>
          Social Media Application that helps liquour enthusiasts share their love for a certain brand of alchohol. Also provides an easy library for Alchohol you have never tried but always wanted to
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
<Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Pre-Game</Card.Title>
          <Card.Text>
          Pre-Game was created with the intention of you having a great start to your night. Enter the venue/location you'll attend to find all the nearby local spots.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Train Scheduler</Card.Title>
          <Card.Text>
          Application that helps the user know when the next train/trolley is coming so they can plan their day accordingly.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
                   
                </Container>
            </>
        )
    }
}

export default Projects;