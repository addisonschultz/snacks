import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLocationMarker = props => {
    return <System.SvgLocationMarker {...props}></System.SvgLocationMarker>
}

export const SvgLocationMarker = withHOC(InnerSvgLocationMarker)

SvgLocationMarker.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLocationMarker, {})
