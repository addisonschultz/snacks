import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMoreFilled = props => {
    return <System.SvgMoreFilled {...props}></System.SvgMoreFilled>
}

export const SvgMoreFilled = withHOC(InnerSvgMoreFilled)

SvgMoreFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMoreFilled, {})
