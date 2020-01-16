import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgThumbsDown = props => {
    return <System.SvgThumbsDown {...props}></System.SvgThumbsDown>
}

export const SvgThumbsDown = withHOC(InnerSvgThumbsDown)

SvgThumbsDown.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgThumbsDown, {})
