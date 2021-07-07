import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGlitter = props => {
    return <System.SvgGlitter {...props}></System.SvgGlitter>
}

export const SvgGlitter = withHOC(InnerSvgGlitter)

SvgGlitter.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGlitter, {})
