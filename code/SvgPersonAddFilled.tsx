import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPersonAddFilled = props => {
    return <System.SvgPersonAddFilled {...props}></System.SvgPersonAddFilled>
}

export const SvgPersonAddFilled = withHOC(InnerSvgPersonAddFilled)

SvgPersonAddFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPersonAddFilled, {})
