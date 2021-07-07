import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBackgroundCheck = props => {
    return <System.SvgBackgroundCheck {...props}></System.SvgBackgroundCheck>
}

export const SvgBackgroundCheck = withHOC(InnerSvgBackgroundCheck)

SvgBackgroundCheck.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBackgroundCheck, {})
