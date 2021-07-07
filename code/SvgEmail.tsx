import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgEmail = props => {
    return <System.SvgEmail {...props}></System.SvgEmail>
}

export const SvgEmail = withHOC(InnerSvgEmail)

SvgEmail.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgEmail, {})
