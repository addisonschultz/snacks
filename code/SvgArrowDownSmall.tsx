import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowDownSmall = props => {
    return <System.SvgArrowDownSmall {...props}></System.SvgArrowDownSmall>
}

export const SvgArrowDownSmall = withHOC(InnerSvgArrowDownSmall)

SvgArrowDownSmall.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowDownSmall, {})
