import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSaleFilled = props => {
    return <System.SvgSaleFilled {...props}></System.SvgSaleFilled>
}

export const SvgSaleFilled = withHOC(InnerSvgSaleFilled)

SvgSaleFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSaleFilled, {})
