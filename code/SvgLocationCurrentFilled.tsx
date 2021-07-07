import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLocationCurrentFilled = props => {
    return <System.SvgLocationCurrentFilled {...props}></System.SvgLocationCurrentFilled>
}

export const SvgLocationCurrentFilled = withHOC(InnerSvgLocationCurrentFilled)

SvgLocationCurrentFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLocationCurrentFilled, {})
