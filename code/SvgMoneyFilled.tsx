import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMoneyFilled = props => {
    return <System.SvgMoneyFilled {...props}></System.SvgMoneyFilled>
}

export const SvgMoneyFilled = withHOC(InnerSvgMoneyFilled)

SvgMoneyFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMoneyFilled, {})
