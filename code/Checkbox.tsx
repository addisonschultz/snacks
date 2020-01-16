import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCheckbox = props => {
    return <System.Checkbox {...props}></System.Checkbox>
}

export const Checkbox = withHOC(InnerCheckbox)

Checkbox.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Checkbox, {
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
