import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrderIssueFilled = props => {
    return <System.SvgOrderIssueFilled {...props}></System.SvgOrderIssueFilled>
}

export const SvgOrderIssueFilled = withHOC(InnerSvgOrderIssueFilled)

SvgOrderIssueFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrderIssueFilled, {})
