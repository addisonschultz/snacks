import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgRecurringOrderFilled = props => {
    return <System.SvgRecurringOrderFilled {...props}></System.SvgRecurringOrderFilled>
}

export const SvgRecurringOrderFilled = withHOC(InnerSvgRecurringOrderFilled)

SvgRecurringOrderFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgRecurringOrderFilled, {})
