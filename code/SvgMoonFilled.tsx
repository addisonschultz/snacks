import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMoonFilled = props => {
    return <System.SvgMoonFilled {...props}></System.SvgMoonFilled>
}

export const SvgMoonFilled = withHOC(InnerSvgMoonFilled)

SvgMoonFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMoonFilled, {})
