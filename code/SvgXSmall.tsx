import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgXSmall = props => {
    return <System.SvgXSmall {...props}></System.SvgXSmall>
}

export const SvgXSmall = withHOC(InnerSvgXSmall)

SvgXSmall.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgXSmall, {})
