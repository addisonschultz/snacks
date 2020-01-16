import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAccessibility = props => {
    return <System.SvgAccessibility {...props}></System.SvgAccessibility>
}

export const SvgAccessibility = withHOC(InnerSvgAccessibility)

SvgAccessibility.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAccessibility, {})
