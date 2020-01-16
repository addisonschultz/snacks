import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGearFilled = props => {
    return <System.SvgGearFilled {...props}></System.SvgGearFilled>
}

export const SvgGearFilled = withHOC(InnerSvgGearFilled)

SvgGearFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGearFilled, {})
