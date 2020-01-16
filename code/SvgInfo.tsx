import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgInfo = props => {
    return <System.SvgInfo {...props}></System.SvgInfo>
}

export const SvgInfo = withHOC(InnerSvgInfo)

SvgInfo.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgInfo, {})
