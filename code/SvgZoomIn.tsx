import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgZoomIn = props => {
    return <System.SvgZoomIn {...props}></System.SvgZoomIn>
}

export const SvgZoomIn = withHOC(InnerSvgZoomIn)

SvgZoomIn.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgZoomIn, {})
