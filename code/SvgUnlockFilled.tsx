import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgUnlockFilled = props => {
    return <System.SvgUnlockFilled {...props}></System.SvgUnlockFilled>
}

export const SvgUnlockFilled = withHOC(InnerSvgUnlockFilled)

SvgUnlockFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgUnlockFilled, {})
