import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPencil = props => {
    return <System.SvgPencil {...props}></System.SvgPencil>
}

export const SvgPencil = withHOC(InnerSvgPencil)

SvgPencil.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPencil, {})
