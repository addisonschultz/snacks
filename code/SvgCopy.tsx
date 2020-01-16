import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCopy = props => {
    return <System.SvgCopy {...props}></System.SvgCopy>
}

export const SvgCopy = withHOC(InnerSvgCopy)

SvgCopy.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCopy, {})
