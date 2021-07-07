import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerRadio = props => {
    return <System.Radio {...props}></System.Radio>
}

export const Radio = withHOC(InnerRadio)

Radio.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Radio, {
    isDisabled: {
        title: "Is disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSelected: {
        title: "Is selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    value: {
        title: "Value",
        type: ControlType.String,
    },
    wrapEl: {
        title: "Wrap el",
        type: ControlType.String,
    },
})
