import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgTicket = props => {
    return <System.SvgTicket {...props}></System.SvgTicket>
}

export const SvgTicket = withHOC(InnerSvgTicket)

SvgTicket.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgTicket, {})
