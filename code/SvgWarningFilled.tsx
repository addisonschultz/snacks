import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgWarningFilled = props => {
    return <System.SvgWarningFilled {...props}></System.SvgWarningFilled>
}

export const SvgWarningFilled = withHOC(InnerSvgWarningFilled)

SvgWarningFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgWarningFilled, {})
