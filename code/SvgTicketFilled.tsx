import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgTicketFilled = props => {
    return <System.SvgTicketFilled {...props}></System.SvgTicketFilled>
}

export const SvgTicketFilled = withHOC(InnerSvgTicketFilled)

SvgTicketFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgTicketFilled, {})
