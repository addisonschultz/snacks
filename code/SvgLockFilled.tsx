import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLockFilled = props => {
    return <System.SvgLockFilled {...props}></System.SvgLockFilled>
}

export const SvgLockFilled = withHOC(InnerSvgLockFilled)

SvgLockFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLockFilled, {})
