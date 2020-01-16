import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowUpSmall = props => {
    return <System.SvgArrowUpSmall {...props}></System.SvgArrowUpSmall>
}

export const SvgArrowUpSmall = withHOC(InnerSvgArrowUpSmall)

SvgArrowUpSmall.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowUpSmall, {})
