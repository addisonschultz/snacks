import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSkip = props => {
    return <System.SvgSkip {...props}></System.SvgSkip>
}

export const SvgSkip = withHOC(InnerSvgSkip)

SvgSkip.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSkip, {})
