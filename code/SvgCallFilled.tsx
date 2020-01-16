import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCallFilled = props => {
    return <System.SvgCallFilled {...props}></System.SvgCallFilled>
}

export const SvgCallFilled = withHOC(InnerSvgCallFilled)

SvgCallFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCallFilled, {})
