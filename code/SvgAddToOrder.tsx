import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAddToOrder = props => {
    return <System.SvgAddToOrder {...props}></System.SvgAddToOrder>
}

export const SvgAddToOrder = withHOC(InnerSvgAddToOrder)

SvgAddToOrder.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAddToOrder, {})
