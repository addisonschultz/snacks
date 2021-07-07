import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBell = props => {
    return <System.SvgBell {...props}></System.SvgBell>
}

export const SvgBell = withHOC(InnerSvgBell)

SvgBell.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBell, {})
