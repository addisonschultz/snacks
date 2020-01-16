import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAdjustment = props => {
    return <System.SvgAdjustment {...props}></System.SvgAdjustment>
}

export const SvgAdjustment = withHOC(InnerSvgAdjustment)

SvgAdjustment.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAdjustment, {})
