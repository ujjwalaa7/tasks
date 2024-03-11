import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "cyan",
        "magenta"
    ];

    // Function to handle color change
    const handleColorChange = (color: React.SetStateAction<string>) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <div>Change Color</div>
            {/* Render radio buttons using map */}
            {colors.map((color, index) => (
                <Form.Check
                    key={index}
                    value={color}
                    inline
                    type="radio"
                    id={color}
                    label={color}
                    checked={selectedColor === color}
                    onChange={() => handleColorChange(color)}
                />
            ))}
            {/* Colored box to display the selected color */}
            <span
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "20px"
                }}
            >
                {selectedColor}
            </span>{" "}
        </div>
    );
}
