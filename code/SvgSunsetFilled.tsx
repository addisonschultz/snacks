import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSunsetFilled = props => {
    return <System.SvgSunsetFilled {...props}></System.SvgSunsetFilled>
}

export const SvgSunsetFilled = withHOC(InnerSvgSunsetFilled)

SvgSunsetFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSunsetFilled, {})
