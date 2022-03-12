// import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import {BsQuestionCircle, BsBarChart} from 'react-icons/bs'

const Header = () => {
    // let navigate = useNavigate(); // For router navigation
    const [barClicked, setbarClicked] = useState(false);
    const [questionClicked, setquestionClicked] = useState(false);

    const handleClose = () => setbarClicked(false);
    const handleCloseQuestion = () => setquestionClicked(false);
 
    return (
        <Container>
            <Row>
                <Col />
                <Col />
                <Col>
                    <BsQuestionCircle onClick={() => setquestionClicked(true)}/>
                </Col>
                <Col>
                    <a style={{letterSpacing: "1vh", color: "#8FC8D7"}}>
                    SQUIR
                    </a>
                    <a style={{letterSpacing: "1vh"}}>
                        DLE
                    </a>
                </Col>
                <Col>
                    <BsBarChart onClick={() => setbarClicked(true)}/>
                </Col>
                <Col />
                <Col />
            </Row>



            <Modal show={barClicked} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Statistics</Modal.Title>
                </Modal.Header>
                <Modal.Body>This Modal will eventually show some stats about your play.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={questionClicked} onHide={handleCloseQuestion}>
                <Modal.Header closeButton>
                    <Modal.Title>How to Play</Modal.Title>
                </Modal.Header>
                <Modal.Body>This Modal will eventually tell you how to play SQUIRDLE</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseQuestion}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
       
    );
}

export default Header;