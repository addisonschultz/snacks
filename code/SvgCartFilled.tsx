import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCartFilled = props => {
    return <System.SvgCartFilled {...props}></System.SvgCartFilled>
}

export const SvgCartFilled = withHOC(InnerSvgCartFilled)

SvgCartFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCartFilled, {})
