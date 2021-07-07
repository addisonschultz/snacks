import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMoon = props => {
    return <System.SvgMoon {...props}></System.SvgMoon>
}

export const SvgMoon = withHOC(InnerSvgMoon)

SvgMoon.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMoon, {})
