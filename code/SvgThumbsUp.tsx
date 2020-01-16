import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgThumbsUp = props => {
    return <System.SvgThumbsUp {...props}></System.SvgThumbsUp>
}

export const SvgThumbsUp = withHOC(InnerSvgThumbsUp)

SvgThumbsUp.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgThumbsUp, {})
