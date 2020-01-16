import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBellFilled = props => {
    return <System.SvgBellFilled {...props}></System.SvgBellFilled>
}

export const SvgBellFilled = withHOC(InnerSvgBellFilled)

SvgBellFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBellFilled, {})
