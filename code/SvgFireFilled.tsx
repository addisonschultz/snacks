import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFireFilled = props => {
    return <System.SvgFireFilled {...props}></System.SvgFireFilled>
}

export const SvgFireFilled = withHOC(InnerSvgFireFilled)

SvgFireFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFireFilled, {})
