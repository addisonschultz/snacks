import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAccessibilityFilled = props => {
    return <System.SvgAccessibilityFilled {...props}></System.SvgAccessibilityFilled>
}

export const SvgAccessibilityFilled = withHOC(InnerSvgAccessibilityFilled)

SvgAccessibilityFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAccessibilityFilled, {})
