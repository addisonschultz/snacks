import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOfficeFilled = props => {
    return <System.SvgOfficeFilled {...props}></System.SvgOfficeFilled>
}

export const SvgOfficeFilled = withHOC(InnerSvgOfficeFilled)

SvgOfficeFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOfficeFilled, {})
