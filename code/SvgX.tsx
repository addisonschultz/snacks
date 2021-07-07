import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgX = props => {
    return <System.SvgX {...props}></System.SvgX>
}

export const SvgX = withHOC(InnerSvgX)

SvgX.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgX, {})
