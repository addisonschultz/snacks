import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSendEmailFilled = props => {
    return <System.SvgSendEmailFilled {...props}></System.SvgSendEmailFilled>
}

export const SvgSendEmailFilled = withHOC(InnerSvgSendEmailFilled)

SvgSendEmailFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSendEmailFilled, {})
