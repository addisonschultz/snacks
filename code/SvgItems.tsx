import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgItems = props => {
    return <System.SvgItems {...props}></System.SvgItems>
}

export const SvgItems = withHOC(InnerSvgItems)

SvgItems.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgItems, {})
