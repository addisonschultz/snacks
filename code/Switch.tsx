import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSwitch = props => {
    return <System.Switch {...props}></System.Switch>
}

export const Switch = withHOC(InnerSwitch)

Switch.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Switch, {
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
    displayOnOffLabel: {
        title: "Display on off label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
