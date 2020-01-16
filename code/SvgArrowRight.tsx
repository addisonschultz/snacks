import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowRight = props => {
    return <System.SvgArrowRight {...props}></System.SvgArrowRight>
}

export const SvgArrowRight = withHOC(InnerSvgArrowRight)

SvgArrowRight.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowRight, {})
