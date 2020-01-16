import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrderFilled = props => {
    return <System.SvgOrderFilled {...props}></System.SvgOrderFilled>
}

export const SvgOrderFilled = withHOC(InnerSvgOrderFilled)

SvgOrderFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrderFilled, {})
