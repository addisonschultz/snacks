import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgClock = props => {
    return <System.SvgClock {...props}></System.SvgClock>
}

export const SvgClock = withHOC(InnerSvgClock)

SvgClock.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgClock, {})
