import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function isEditMode1(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function isStudent1(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function isEditMode2() {
        return (
            <div>
                <Form.Group controlId="formMovieName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={userName} onChange={updateName} />
                </Form.Group>
                <div>
                    <Form.Check
                        type="checkbox"
                        id="isStudentCheck"
                        label="Student?"
                        checked={isStudent}
                        onChange={isStudent1}
                    />
                </div>
                {/* <div>
                    {isStudent
                        ? userName + " is a student."
                        : userName + " is not a student."}
                </div> */}
            </div>
        );
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-student-check"
                checked={isEditMode}
                onChange={isEditMode1}
            />
            <div>
                {/* {userName} is {isStudent ? "student" : "not a student"}. */}
            </div>
            <div>{isEditMode ? isEditMode2() : "Your Name is a student"}</div>
            <div>
                {isStudent
                    ? userName + " is a student."
                    : userName + " is not a student."}
            </div>
        </div>
    );
}
