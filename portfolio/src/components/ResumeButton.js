import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AllPages from './AllPages';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/about.css';


 
export default function ResumeBttn() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='button-resume' variant="primary" onClick={handleShow}>
          Resume 
        </Button>
  
        <Modal className="resume-modal" show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>My Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body><AllPages pdf="../../Ernesto-Sanchez-Santana.pdf"></AllPages></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


