import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgNo = props => {
    return <System.SvgNo {...props}></System.SvgNo>
}

export const SvgNo = withHOC(InnerSvgNo)

SvgNo.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgNo, {})
