import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLightbulb = props => {
    return <System.SvgLightbulb {...props}></System.SvgLightbulb>
}

export const SvgLightbulb = withHOC(InnerSvgLightbulb)

SvgLightbulb.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLightbulb, {})
