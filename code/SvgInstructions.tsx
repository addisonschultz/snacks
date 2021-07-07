import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgInstructions = props => {
    return <System.SvgInstructions {...props}></System.SvgInstructions>
}

export const SvgInstructions = withHOC(InnerSvgInstructions)

SvgInstructions.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgInstructions, {})
