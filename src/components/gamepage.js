import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import { Col, Container, Row, Button, Form, Image } from 'react-bootstrap'
import image from '../assets/squirdle_logo_1.png'
import pokelist from '../assets/pokelist.json'

const GamePage = () => {
    // let navigate = useNavigate(); // For router navigation
    const [firstGuess, setfirstGuess] = useState("");
    const [secondGuess, setsecondGuess] = useState("");
    const [thirdGuess, setthirdGuess] = useState("");
    const [fourthGuess, setfourthGuess] = useState("");
    const [fifthGuess, setfifthGuess] = useState("");
    const [sixthGuess, setsixthGuess] = useState("");

    const [index, setindex] = useState(0)

    const [guessIndex, setguessIndex] = useState(0);
    const [guess, setguess] = useState("");
    const [source, setsource] = useState();

    useEffect(() => {
        const date = new Date();
        const rand_date_num = Math.floor(((date.getUTCDay() + date.getUTCMonth() + date.getUTCFullYear()) * (date.getUTCDay() + date.getUTCMonth()) / date.getUTCDay())) % pokelist.length;
        setsource(pokelist[rand_date_num].img);
        setindex(rand_date_num);
    }, []); 


    const guessMade = () => {
        if(guessIndex == 0){
            setfirstGuess(guess);
            setguessIndex(guessIndex + 1)
        }
        else if(guessIndex === 1){
            setsecondGuess(guess);
            setguessIndex(guessIndex + 1)
        }
        else if(guessIndex === 2){
            setthirdGuess(guess);
            setguessIndex(guessIndex + 1)
        }
        else if(guessIndex === 3){
            setfourthGuess(guess);
            setguessIndex(guessIndex + 1)
        }
        else if(guessIndex === 4){
            setfifthGuess(guess);
            setguessIndex(guessIndex + 1)
        }
        else if(guessIndex === 5){
            setsixthGuess(guess);
            setguessIndex(guessIndex + 1)
        }
        else{
            alert("You have used all 6 guesses for today.")
        }
    }
 
    return (
        <Container style={{color: 'white', fontSize: "3vh"}}>
            <hr />
            {source}
            <Image src='../assets/bulbasaur.png' alt="image of the pokemon of the day" style={{height: 'auto', width:'100%', marginBottom: '2vh'}}/>



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

            <Row style={{paddingBottom: '2vh'}}>
                <Col />

                <Col xs={5}>
                    <input placeholder="Make a Guess..." onChange={e=> setguess(e.target.value)} style={{fontSize: '2.3vh', minHeight: '2.2vh'}}/>
                    <Button variant="primary" onClick={()=> guessMade()}>Submit</Button>
                </Col>

                <Col />
            </Row>

        </Container>
       
    );
}

export default GamePage;