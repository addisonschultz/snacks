import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLightningFilled = props => {
    return <System.SvgLightningFilled {...props}></System.SvgLightningFilled>
}

export const SvgLightningFilled = withHOC(InnerSvgLightningFilled)

SvgLightningFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLightningFilled, {})
