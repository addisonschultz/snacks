import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgStoreFilled = props => {
    return <System.SvgStoreFilled {...props}></System.SvgStoreFilled>
}

export const SvgStoreFilled = withHOC(InnerSvgStoreFilled)

SvgStoreFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgStoreFilled, {})
