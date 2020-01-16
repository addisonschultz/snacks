import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCold = props => {
    return <System.SvgCold {...props}></System.SvgCold>
}

export const SvgCold = withHOC(InnerSvgCold)

SvgCold.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCold, {})
