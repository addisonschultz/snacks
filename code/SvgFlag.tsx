import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFlag = props => {
    return <System.SvgFlag {...props}></System.SvgFlag>
}

export const SvgFlag = withHOC(InnerSvgFlag)

SvgFlag.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFlag, {})
