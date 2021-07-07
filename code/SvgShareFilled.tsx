import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgShareFilled = props => {
    return <System.SvgShareFilled {...props}></System.SvgShareFilled>
}

export const SvgShareFilled = withHOC(InnerSvgShareFilled)

SvgShareFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgShareFilled, {})
