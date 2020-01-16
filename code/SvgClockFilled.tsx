import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgClockFilled = props => {
    return <System.SvgClockFilled {...props}></System.SvgClockFilled>
}

export const SvgClockFilled = withHOC(InnerSvgClockFilled)

SvgClockFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgClockFilled, {})
