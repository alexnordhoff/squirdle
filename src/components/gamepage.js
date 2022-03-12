import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { Col, Container, Row, Modal, Button, Form } from 'react-bootstrap'
import {BsQuestionCircle, BsBarChart} from 'react-icons/bs'

const GamePage = () => {
    // let navigate = useNavigate(); // For router navigation
    const [firstGuess, setfirstGuess] = useState("");
    const [secondGuess, setsecondGuess] = useState("");
    const [thirdGuess, setthirdGuess] = useState("");
    const [fourthGuess, setfourthGuess] = useState("");
    const [fifthGuess, setfifthGuess] = useState("");
    const [sixthGuess, setsixthGuess] = useState("");
 
    return (
        <Container style={{color: 'white', fontSize: "3vh"}}>
            <hr />
            <Row style={{paddingBottom: '2vh'}}>
                <Col />

                <Col xs={5} className="block-example border border-white rounded" style={{minHeight : '4.8vh', backgroundColor: '#323545'}}>
                    {firstGuess}
                </Col>

                <Col />
            </Row>

            <Row style={{paddingBottom: '2vh'}}>
                <Col />

                <Col xs={5} className="block-example border border-white rounded" style={{minHeight : '4.8vh', backgroundColor: '#323545'}}>
                    {secondGuess}
                </Col>

                <Col />
            </Row>

            <Row style={{paddingBottom: '2vh'}}>
                <Col />

                <Col xs={5} className="block-example border border-white rounded" style={{minHeight : '4.8vh', backgroundColor: '#323545'}}>
                    {thirdGuess}
                </Col>

                <Col />
            </Row>

            <Row style={{paddingBottom: '2vh'}}>
                <Col />

                <Col xs={5} className="block-example border border-white rounded" style={{minHeight : '4.8vh', backgroundColor: '#323545'}}>
                    {fourthGuess}
                </Col>

                <Col />
            </Row>

            <Row style={{paddingBottom: '2vh'}}>
                <Col />

                <Col xs={5} className="block-example border border-white rounded" style={{minHeight : '4.8vh', backgroundColor: '#323545'}}>
                    {fifthGuess}
                </Col>

                <Col />
            </Row>

            <Row style={{paddingBottom: '2vh'}}>
                <Col />

                <Col xs={5} className="block-example border border-white rounded" style={{minHeight : '4.8vh', backgroundColor: '#323545'}}>
                    {sixthGuess}
                </Col>

                <Col />
            </Row>
        </Container>
       
    );
}

export default GamePage;