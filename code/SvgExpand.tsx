import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgExpand = props => {
    return <System.SvgExpand {...props}></System.SvgExpand>
}

export const SvgExpand = withHOC(InnerSvgExpand)

SvgExpand.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgExpand, {})
