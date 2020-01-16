import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFilter = props => {
    return <System.SvgFilter {...props}></System.SvgFilter>
}

export const SvgFilter = withHOC(InnerSvgFilter)

SvgFilter.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFilter, {})
