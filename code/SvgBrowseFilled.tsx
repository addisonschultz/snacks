import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBrowseFilled = props => {
    return <System.SvgBrowseFilled {...props}></System.SvgBrowseFilled>
}

export const SvgBrowseFilled = withHOC(InnerSvgBrowseFilled)

SvgBrowseFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBrowseFilled, {})
