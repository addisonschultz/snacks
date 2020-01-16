import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCall = props => {
    return <System.SvgCall {...props}></System.SvgCall>
}

export const SvgCall = withHOC(InnerSvgCall)

SvgCall.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCall, {})
