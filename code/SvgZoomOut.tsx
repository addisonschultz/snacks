import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgZoomOut = props => {
    return <System.SvgZoomOut {...props}></System.SvgZoomOut>
}

export const SvgZoomOut = withHOC(InnerSvgZoomOut)

SvgZoomOut.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgZoomOut, {})
