import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgShare = props => {
    return <System.SvgShare {...props}></System.SvgShare>
}

export const SvgShare = withHOC(InnerSvgShare)

SvgShare.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgShare, {})
