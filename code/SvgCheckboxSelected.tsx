import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCheckboxSelected = props => {
    return <System.SvgCheckboxSelected {...props}></System.SvgCheckboxSelected>
}

export const SvgCheckboxSelected = withHOC(InnerSvgCheckboxSelected)

SvgCheckboxSelected.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCheckboxSelected, {})
