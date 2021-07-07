import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgDeleteFilled = props => {
    return <System.SvgDeleteFilled {...props}></System.SvgDeleteFilled>
}

export const SvgDeleteFilled = withHOC(InnerSvgDeleteFilled)

SvgDeleteFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgDeleteFilled, {})
