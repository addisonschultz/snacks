import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFlagFilled = props => {
    return <System.SvgFlagFilled {...props}></System.SvgFlagFilled>
}

export const SvgFlagFilled = withHOC(InnerSvgFlagFilled)

SvgFlagFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFlagFilled, {})
