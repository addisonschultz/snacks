import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgHelp = props => {
    return <System.SvgHelp {...props}></System.SvgHelp>
}

export const SvgHelp = withHOC(InnerSvgHelp)

SvgHelp.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgHelp, {})
