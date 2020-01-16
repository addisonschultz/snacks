import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgRecurringOrder = props => {
    return <System.SvgRecurringOrder {...props}></System.SvgRecurringOrder>
}

export const SvgRecurringOrder = withHOC(InnerSvgRecurringOrder)

SvgRecurringOrder.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgRecurringOrder, {})
