import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPinterest = props => {
    return <System.SvgPinterest {...props}></System.SvgPinterest>
}

export const SvgPinterest = withHOC(InnerSvgPinterest)

SvgPinterest.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPinterest, {})
