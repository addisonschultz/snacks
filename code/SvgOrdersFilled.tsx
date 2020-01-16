import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrdersFilled = props => {
    return <System.SvgOrdersFilled {...props}></System.SvgOrdersFilled>
}

export const SvgOrdersFilled = withHOC(InnerSvgOrdersFilled)

SvgOrdersFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrdersFilled, {})
