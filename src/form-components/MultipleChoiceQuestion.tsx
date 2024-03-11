import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [option, setOption] = useState<string>(options[0]);

    function giveAns1(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="MultipleChoice">
                <Form.Label>Choose right ans</Form.Label>
                <Form.Select value={option} onChange={giveAns1}>
                    {options.map((a_option: string) => (
                        <option key={a_option} value={a_option}>
                            {a_option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {option === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </div>
    );
}
