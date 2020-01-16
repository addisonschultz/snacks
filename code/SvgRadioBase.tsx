import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgRadioBase = props => {
    return <System.SvgRadioBase {...props}></System.SvgRadioBase>
}

export const SvgRadioBase = withHOC(InnerSvgRadioBase)

SvgRadioBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgRadioBase, {})
