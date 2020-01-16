import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgExpandFilled = props => {
    return <System.SvgExpandFilled {...props}></System.SvgExpandFilled>
}

export const SvgExpandFilled = withHOC(InnerSvgExpandFilled)

SvgExpandFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgExpandFilled, {})
