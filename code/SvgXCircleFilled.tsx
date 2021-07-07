import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgXCircleFilled = props => {
    return <System.SvgXCircleFilled {...props}></System.SvgXCircleFilled>
}

export const SvgXCircleFilled = withHOC(InnerSvgXCircleFilled)

SvgXCircleFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgXCircleFilled, {})
