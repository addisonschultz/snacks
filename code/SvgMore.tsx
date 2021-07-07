import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMore = props => {
    return <System.SvgMore {...props}></System.SvgMore>
}

export const SvgMore = withHOC(InnerSvgMore)

SvgMore.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMore, {})
