import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowUp = props => {
    return <System.SvgArrowUp {...props}></System.SvgArrowUp>
}

export const SvgArrowUp = withHOC(InnerSvgArrowUp)

SvgArrowUp.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowUp, {})
