import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAddToOrderFilled = props => {
    return <System.SvgAddToOrderFilled {...props}></System.SvgAddToOrderFilled>
}

export const SvgAddToOrderFilled = withHOC(InnerSvgAddToOrderFilled)

SvgAddToOrderFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAddToOrderFilled, {})
