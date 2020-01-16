import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCheckboxDisabled = props => {
    return <System.SvgCheckboxDisabled {...props}></System.SvgCheckboxDisabled>
}

export const SvgCheckboxDisabled = withHOC(InnerSvgCheckboxDisabled)

SvgCheckboxDisabled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCheckboxDisabled, {})
