import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMinus = props => {
    return <System.SvgMinus {...props}></System.SvgMinus>
}

export const SvgMinus = withHOC(InnerSvgMinus)

SvgMinus.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMinus, {})
