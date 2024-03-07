import React from "react";
import "./App.css";

import { Button, Col, Container, Row } from "react-bootstrap";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { DoubleHalf } from "./bad-components/DoubleHalf";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            HEAD
            <h1>Software Development Task 3</h1>
            <img
                src="https://i.pinimg.com/564x/23/c2/e0/23c2e029107dae85d9601439cf3ffd04.jpg"
                alt="A picture of a Horse"
            />
            <ul>
                <li>Horse</li>
                <li>Grass</li>
                <li>Flowers</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <div id="rectangle2"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. - Hello World ujjwala pothula
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <ChooseTeam></ChooseTeam>
            <ColoredBox></ColoredBox>
            <ShoveBox></ShoveBox>
            <DoubleHalf></DoubleHalf>
            upstream/task-state
        </div>
    );
}

export default App;
