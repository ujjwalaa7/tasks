import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const QuestionType = {
        MULTIPLE_CHOICE: "multiple_choice_question",
        SHORT_ANSWER: "short_answer_question"
    };

    const [questionType, setQuestionType] = useState(QuestionType.SHORT_ANSWER);

    const handleChangeType = () => {
        setQuestionType(
            questionType === QuestionType.MULTIPLE_CHOICE
                ? QuestionType.SHORT_ANSWER
                : QuestionType.MULTIPLE_CHOICE
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            {questionType === QuestionType.MULTIPLE_CHOICE && (
                <p>Multiple Choice</p>
            )}
            {questionType === QuestionType.SHORT_ANSWER && <p>Short Answer</p>}
        </div>
    );
}
