import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerButton = props => {
    return <System.Button {...props}></System.Button>
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Button, {
    size: {
        title: "Size",
        type: ControlType.Enum,
        defaultValue: "standard",
        options: ["tiny", "small", "standard", "large"],
        optionTitles: ["tiny", "small", "standard", "large"],
    },
    snacksStyle: {
        title: "Snacks style",
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "flat", "coupon"],
        optionTitles: ["primary", "secondary", "flat", "coupon"],
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        defaultValue: "button",
        options: ["button", "reset", "submit"],
        optionTitles: ["button", "reset", "submit"],
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
    },
    iconPosition: {
        title: "Icon position",
        type: ControlType.Enum,
        defaultValue: "left",
        options: ["left", "right"],
        optionTitles: ["left", "right"],
    },
    inverted: {
        title: "Inverted",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    tabIndex: {
        title: "Tab index",
        type: ControlType.Number,
    },
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
    },
})
