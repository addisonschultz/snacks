import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOffice = props => {
    return <System.SvgOffice {...props}></System.SvgOffice>
}

export const SvgOffice = withHOC(InnerSvgOffice)

SvgOffice.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOffice, {})
