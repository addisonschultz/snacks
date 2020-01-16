import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgHomeFilled = props => {
    return <System.SvgHomeFilled {...props}></System.SvgHomeFilled>
}

export const SvgHomeFilled = withHOC(InnerSvgHomeFilled)

SvgHomeFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgHomeFilled, {})
