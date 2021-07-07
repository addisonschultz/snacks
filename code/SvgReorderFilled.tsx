import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgReorderFilled = props => {
    return <System.SvgReorderFilled {...props}></System.SvgReorderFilled>
}

export const SvgReorderFilled = withHOC(InnerSvgReorderFilled)

SvgReorderFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgReorderFilled, {})
