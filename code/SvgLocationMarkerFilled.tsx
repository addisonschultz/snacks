import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLocationMarkerFilled = props => {
    return <System.SvgLocationMarkerFilled {...props}></System.SvgLocationMarkerFilled>
}

export const SvgLocationMarkerFilled = withHOC(InnerSvgLocationMarkerFilled)

SvgLocationMarkerFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLocationMarkerFilled, {})
