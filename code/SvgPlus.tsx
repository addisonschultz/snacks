import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPlus = props => {
    return <System.SvgPlus {...props}></System.SvgPlus>
}

export const SvgPlus = withHOC(InnerSvgPlus)

SvgPlus.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPlus, {})
