import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgArrowLeftSmall = props => {
    return <System.SvgArrowLeftSmall {...props}></System.SvgArrowLeftSmall>
}

export const SvgArrowLeftSmall = withHOC(InnerSvgArrowLeftSmall)

SvgArrowLeftSmall.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgArrowLeftSmall, {})
