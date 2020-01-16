import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgRadioDisabled = props => {
    return <System.SvgRadioDisabled {...props}></System.SvgRadioDisabled>
}

export const SvgRadioDisabled = withHOC(InnerSvgRadioDisabled)

SvgRadioDisabled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgRadioDisabled, {})
