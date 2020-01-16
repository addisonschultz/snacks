import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLightbulbFilled = props => {
    return <System.SvgLightbulbFilled {...props}></System.SvgLightbulbFilled>
}

export const SvgLightbulbFilled = withHOC(InnerSvgLightbulbFilled)

SvgLightbulbFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLightbulbFilled, {})
