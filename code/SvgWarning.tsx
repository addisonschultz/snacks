import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgWarning = props => {
    return <System.SvgWarning {...props}></System.SvgWarning>
}

export const SvgWarning = withHOC(InnerSvgWarning)

SvgWarning.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgWarning, {})
