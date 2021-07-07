import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgHome = props => {
    return <System.SvgHome {...props}></System.SvgHome>
}

export const SvgHome = withHOC(InnerSvgHome)

SvgHome.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgHome, {})
