import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttemptsLeft, setNumAttemptsLeft] = useState<number>(3);
    const [numAttemptsReq, setNumAttemptsReq] = useState<string>("");

    function gainFunc(): void {
        setNumAttemptsLeft(numAttemptsLeft + (parseInt(numAttemptsReq) || 0));
    }

    function useFunc(): void {
        setNumAttemptsLeft(numAttemptsLeft - 1);
    }

    return (
        <div>
            <Form.Group controlId="Numeric Box">
                <Form.Label>Enter number: </Form.Label>
                <Form.Control
                    type="number"
                    value={numAttemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumAttemptsReq(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <Button onClick={gainFunc}>gain</Button>
            <Button onClick={useFunc} disabled={numAttemptsLeft === 0}>
                use
            </Button>
            <p>{numAttemptsLeft}</p>
        </div>
    );
}
