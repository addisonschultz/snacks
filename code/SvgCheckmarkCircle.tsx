import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCheckmarkCircle = props => {
    return <System.SvgCheckmarkCircle {...props}></System.SvgCheckmarkCircle>
}

export const SvgCheckmarkCircle = withHOC(InnerSvgCheckmarkCircle)

SvgCheckmarkCircle.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCheckmarkCircle, {})
