import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPencilFilled = props => {
    return <System.SvgPencilFilled {...props}></System.SvgPencilFilled>
}

export const SvgPencilFilled = withHOC(InnerSvgPencilFilled)

SvgPencilFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPencilFilled, {})
