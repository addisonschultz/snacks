import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLikeFilled = props => {
    return <System.SvgLikeFilled {...props}></System.SvgLikeFilled>
}

export const SvgLikeFilled = withHOC(InnerSvgLikeFilled)

SvgLikeFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLikeFilled, {})
