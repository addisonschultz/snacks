import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSunset = props => {
    return <System.SvgSunset {...props}></System.SvgSunset>
}

export const SvgSunset = withHOC(InnerSvgSunset)

SvgSunset.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSunset, {})
