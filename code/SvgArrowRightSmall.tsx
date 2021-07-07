import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowRightSmall = props => {
    return <System.SvgArrowRightSmall {...props}></System.SvgArrowRightSmall>
}

export const SvgArrowRightSmall = withHOC(InnerSvgArrowRightSmall)

SvgArrowRightSmall.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowRightSmall, {})
