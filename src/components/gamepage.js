import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import {BsQuestionCircle, BsBarChart} from 'react-icons/bs'

const GamePage = () => {
    // let navigate = useNavigate(); // For router navigation
    
 
    return (
        <Container style={{color: 'white'}}>
            <hr />
            <Row>
                <Col />
                <Col>
                    This is a row.
                </Col>
                <Col />
                
            </Row>
            <Row>
                <Col />
                <Col>
                    This is another row. 
                </Col>
                <Col />

            </Row>
        </Container>
       
    );
}

export default GamePage;