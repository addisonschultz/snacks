import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGraphFilled = props => {
    return <System.SvgGraphFilled {...props}></System.SvgGraphFilled>
}

export const SvgGraphFilled = withHOC(InnerSvgGraphFilled)

SvgGraphFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGraphFilled, {})
