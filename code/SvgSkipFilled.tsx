import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSkipFilled = props => {
    return <System.SvgSkipFilled {...props}></System.SvgSkipFilled>
}

export const SvgSkipFilled = withHOC(InnerSvgSkipFilled)

SvgSkipFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSkipFilled, {})
