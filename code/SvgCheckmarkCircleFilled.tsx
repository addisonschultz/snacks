import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCheckmarkCircleFilled = props => {
    return <System.SvgCheckmarkCircleFilled {...props}></System.SvgCheckmarkCircleFilled>
}

export const SvgCheckmarkCircleFilled = withHOC(InnerSvgCheckmarkCircleFilled)

SvgCheckmarkCircleFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCheckmarkCircleFilled, {})
