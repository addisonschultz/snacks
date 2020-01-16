import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrderIssue = props => {
    return <System.SvgOrderIssue {...props}></System.SvgOrderIssue>
}

export const SvgOrderIssue = withHOC(InnerSvgOrderIssue)

SvgOrderIssue.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrderIssue, {})
