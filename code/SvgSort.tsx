import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSort = props => {
    return <System.SvgSort {...props}></System.SvgSort>
}

export const SvgSort = withHOC(InnerSvgSort)

SvgSort.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSort, {})
