import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    type QuestionType = "short_answer_question" | "multiple_choice_question";
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    // Function to handle changing question type
    const handleChangeType = () => {
        setQuestionType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <button onClick={handleChangeType}>Change Type</button>
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </div>
    );
}
