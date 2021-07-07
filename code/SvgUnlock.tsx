import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgUnlock = props => {
    return <System.SvgUnlock {...props}></System.SvgUnlock>
}

export const SvgUnlock = withHOC(InnerSvgUnlock)

SvgUnlock.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgUnlock, {})
