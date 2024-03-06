import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState("short_answer_question"); // Directly use the string values instead of the object

    const handleChangeType = () => {
        // Since we're directly using string values, we can directly compare
        setQuestionType(
            questionType === "multiple_choice_question" // Use string values directly
                ? "short_answer_question" // Use string values directly
                : "multiple_choice_question" // Use string values directly
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            {questionType === "multiple_choice_question" && ( // Use string values directly
                <p>Multiple Choice</p>
            )}
            {questionType === "short_answer_question" && <p>Short Answer</p>}{" "}
            {/* Use string values directly */}
        </div>
    );
}
