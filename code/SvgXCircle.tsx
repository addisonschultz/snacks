import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgXCircle = props => {
    return <System.SvgXCircle {...props}></System.SvgXCircle>
}

export const SvgXCircle = withHOC(InnerSvgXCircle)

SvgXCircle.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgXCircle, {})
