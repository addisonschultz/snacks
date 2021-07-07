import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAccountFilled = props => {
    return <System.SvgAccountFilled {...props}></System.SvgAccountFilled>
}

export const SvgAccountFilled = withHOC(InnerSvgAccountFilled)

SvgAccountFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAccountFilled, {})
