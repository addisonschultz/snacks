import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgInfoFilled = props => {
    return <System.SvgInfoFilled {...props}></System.SvgInfoFilled>
}

export const SvgInfoFilled = withHOC(InnerSvgInfoFilled)

SvgInfoFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgInfoFilled, {})
