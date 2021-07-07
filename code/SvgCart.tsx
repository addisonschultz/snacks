import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCart = props => {
    return <System.SvgCart {...props}></System.SvgCart>
}

export const SvgCart = withHOC(InnerSvgCart)

SvgCart.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCart, {})
