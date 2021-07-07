import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgViewFilled = props => {
    return <System.SvgViewFilled {...props}></System.SvgViewFilled>
}

export const SvgViewFilled = withHOC(InnerSvgViewFilled)

SvgViewFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgViewFilled, {})
