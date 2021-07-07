import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBagFilled = props => {
    return <System.SvgBagFilled {...props}></System.SvgBagFilled>
}

export const SvgBagFilled = withHOC(InnerSvgBagFilled)

SvgBagFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBagFilled, {})
