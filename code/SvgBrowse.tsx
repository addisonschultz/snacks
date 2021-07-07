import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBrowse = props => {
    return <System.SvgBrowse {...props}></System.SvgBrowse>
}

export const SvgBrowse = withHOC(InnerSvgBrowse)

SvgBrowse.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBrowse, {})
