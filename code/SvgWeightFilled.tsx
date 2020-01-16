import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgWeightFilled = props => {
    return <System.SvgWeightFilled {...props}></System.SvgWeightFilled>
}

export const SvgWeightFilled = withHOC(InnerSvgWeightFilled)

SvgWeightFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgWeightFilled, {})
