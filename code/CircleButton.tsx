import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCircleButton = props => {
    return <System.CircleButton {...props}></System.CircleButton>
}

export const CircleButton = withHOC(InnerCircleButton)

CircleButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CircleButton, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    style: {
        title: "Style",
        type: ControlType.String,
    },
})
