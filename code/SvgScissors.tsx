import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgScissors = props => {
    return <System.SvgScissors {...props}></System.SvgScissors>
}

export const SvgScissors = withHOC(InnerSvgScissors)

SvgScissors.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgScissors, {})
