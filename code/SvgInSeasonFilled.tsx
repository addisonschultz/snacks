import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgInSeasonFilled = props => {
    return <System.SvgInSeasonFilled {...props}></System.SvgInSeasonFilled>
}

export const SvgInSeasonFilled = withHOC(InnerSvgInSeasonFilled)

SvgInSeasonFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgInSeasonFilled, {})
