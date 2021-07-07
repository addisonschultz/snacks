import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgScan = props => {
    return <System.SvgScan {...props}></System.SvgScan>
}

export const SvgScan = withHOC(InnerSvgScan)

SvgScan.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgScan, {})
