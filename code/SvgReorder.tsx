import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgReorder = props => {
    return <System.SvgReorder {...props}></System.SvgReorder>
}

export const SvgReorder = withHOC(InnerSvgReorder)

SvgReorder.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgReorder, {})
