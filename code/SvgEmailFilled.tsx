import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgEmailFilled = props => {
    return <System.SvgEmailFilled {...props}></System.SvgEmailFilled>
}

export const SvgEmailFilled = withHOC(InnerSvgEmailFilled)

SvgEmailFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgEmailFilled, {})
