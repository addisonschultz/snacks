import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPill = props => {
    return <System.Pill {...props}></System.Pill>
}

export const Pill = withHOC(InnerPill)

Pill.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Pill, {
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#CC0033",
    },
})
