import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowDown = props => {
    return <System.SvgArrowDown {...props}></System.SvgArrowDown>
}

export const SvgArrowDown = withHOC(InnerSvgArrowDown)

SvgArrowDown.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowDown, {})
