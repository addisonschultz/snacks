import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSendEmail = props => {
    return <System.SvgSendEmail {...props}></System.SvgSendEmail>
}

export const SvgSendEmail = withHOC(InnerSvgSendEmail)

SvgSendEmail.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSendEmail, {})
