import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgNoFilled = props => {
    return <System.SvgNoFilled {...props}></System.SvgNoFilled>
}

export const SvgNoFilled = withHOC(InnerSvgNoFilled)

SvgNoFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgNoFilled, {})
