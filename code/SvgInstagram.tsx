import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgInstagram = props => {
    return <System.SvgInstagram {...props}></System.SvgInstagram>
}

export const SvgInstagram = withHOC(InnerSvgInstagram)

SvgInstagram.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgInstagram, {})
