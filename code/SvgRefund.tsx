import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgRefund = props => {
    return <System.SvgRefund {...props}></System.SvgRefund>
}

export const SvgRefund = withHOC(InnerSvgRefund)

SvgRefund.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgRefund, {})
