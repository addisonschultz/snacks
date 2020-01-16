import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowLeft = props => {
    return <System.SvgArrowLeft {...props}></System.SvgArrowLeft>
}

export const SvgArrowLeft = withHOC(InnerSvgArrowLeft)

SvgArrowLeft.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowLeft, {})
