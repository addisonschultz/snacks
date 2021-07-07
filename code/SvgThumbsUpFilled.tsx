import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgThumbsUpFilled = props => {
    return <System.SvgThumbsUpFilled {...props}></System.SvgThumbsUpFilled>
}

export const SvgThumbsUpFilled = withHOC(InnerSvgThumbsUpFilled)

SvgThumbsUpFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgThumbsUpFilled, {})
