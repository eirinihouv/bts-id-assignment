import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Button } from "./canvas"

// Open Preview: Command + P
// Learn more: https://framer.com/api

PrimaryButton.defaultProps = {
    buttonText: "Downaload",
    buttonColor: "rgba(255, 0, 0, 0)",
    borderStyle: "2px solid rgba(0, 0, 0, 1)",
    radius: "10px",
}

export function PrimaryButton(props) {
    return (
        <Button
            background={props.buttonColor}
            buttonLabel={props.buttonText}
            border={props.borderStyle}
            radius={props.radius}
        />
    )
}

addPropertyControls(PrimaryButton, {
    buttonText: {
        type: ControlType.String,
        title: "Button Label",
        placeholder: "Type here",
    },
    buttonColor: {
        type: ControlType.Color,
        title: "Button Color",
    },
})
