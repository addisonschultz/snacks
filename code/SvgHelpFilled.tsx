import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgHelpFilled = props => {
    return <System.SvgHelpFilled {...props}></System.SvgHelpFilled>
}

export const SvgHelpFilled = withHOC(InnerSvgHelpFilled)

SvgHelpFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgHelpFilled, {})
