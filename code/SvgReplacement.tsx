import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgReplacement = props => {
    return <System.SvgReplacement {...props}></System.SvgReplacement>
}

export const SvgReplacement = withHOC(InnerSvgReplacement)

SvgReplacement.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgReplacement, {})
