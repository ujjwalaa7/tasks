import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAns, setGivenAns] = useState<string>("");

    function giveAns1(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAns(event.target.value);
    }

    return (
        <div>
            <input type="text" value={givenAns} onChange={giveAns1} />
            {givenAns === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
