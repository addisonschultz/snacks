import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgWalkingFilled = props => {
    return <System.SvgWalkingFilled {...props}></System.SvgWalkingFilled>
}

export const SvgWalkingFilled = withHOC(InnerSvgWalkingFilled)

SvgWalkingFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgWalkingFilled, {})
