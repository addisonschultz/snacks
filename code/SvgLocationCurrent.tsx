import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLocationCurrent = props => {
    return <System.SvgLocationCurrent {...props}></System.SvgLocationCurrent>
}

export const SvgLocationCurrent = withHOC(InnerSvgLocationCurrent)

SvgLocationCurrent.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLocationCurrent, {})
