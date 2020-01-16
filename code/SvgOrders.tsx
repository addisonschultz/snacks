import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrders = props => {
    return <System.SvgOrders {...props}></System.SvgOrders>
}

export const SvgOrders = withHOC(InnerSvgOrders)

SvgOrders.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrders, {})
