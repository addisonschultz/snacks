import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgInstructionsFilled = props => {
    return <System.SvgInstructionsFilled {...props}></System.SvgInstructionsFilled>
}

export const SvgInstructionsFilled = withHOC(InnerSvgInstructionsFilled)

SvgInstructionsFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgInstructionsFilled, {})
