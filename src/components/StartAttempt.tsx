import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts((prevAttempts) => prevAttempts - 1);
        }
    };

    const stopQuiz = () => {
        setQuizInProgress(false);
    };

    const increaseAttempts = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <p>Attempts left: {attempts}</p>
            <p>Quiz {quizInProgress ? "in progress" : "not in progress"}</p>
            <button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </button>
            <button onClick={increaseAttempts} disabled={quizInProgress}>
                Mulligan
            </button>
        </div>
    );
}
