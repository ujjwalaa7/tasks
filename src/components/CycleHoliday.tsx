import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Christmas: 🎄"
        | "Diwali: 🪔"
        | "Halloween: 🎃"
        | "New Years: 🎉"
        | "Thanksgiving: 🦃";

    const ALPHA_HOLIDAYS: Record<Holiday, Holiday> = {
        "Christmas: 🎄": "Diwali: 🪔",
        "Diwali: 🪔": "New Years: 🎉",
        "Halloween: 🎃": "Thanksgiving: 🦃",
        "New Years: 🎉": "Halloween: 🎃",
        "Thanksgiving: 🦃": "Christmas: 🎄"
    };

    const YEAR_HOLIDAYS: Record<Holiday, Holiday> = {
        "Christmas: 🎄": "New Years: 🎉",
        "New Years: 🎉": "Halloween: 🎃",
        "Halloween: 🎃": "Diwali: 🪔",
        "Diwali: 🪔": "Thanksgiving: 🦃",
        "Thanksgiving: 🦃": "Christmas: 🎄"
    };

    const [currHoliday, setCurrHoliday] = useState<Holiday>("Christmas: 🎄");

    const handleAdvanceAlphabetically = () => {
        setCurrHoliday((prevHoliday) => ALPHA_HOLIDAYS[prevHoliday]);
    };

    const handleAdvanceByYear = () => {
        setCurrHoliday((prevHoliday) => YEAR_HOLIDAYS[prevHoliday]);
    };

    return (
        <div>
            <p>Holiday: {currHoliday}</p>
            <Button onClick={handleAdvanceAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={handleAdvanceByYear}>Advance by Year</Button>
        </div>
    );
}
