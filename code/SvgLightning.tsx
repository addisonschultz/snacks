import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLightning = props => {
    return <System.SvgLightning {...props}></System.SvgLightning>
}

export const SvgLightning = withHOC(InnerSvgLightning)

SvgLightning.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLightning, {})
