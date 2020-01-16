import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCheckmark = props => {
    return <System.SvgCheckmark {...props}></System.SvgCheckmark>
}

export const SvgCheckmark = withHOC(InnerSvgCheckmark)

SvgCheckmark.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCheckmark, {})
