import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgIos = props => {
    return <System.SvgIos {...props}></System.SvgIos>
}

export const SvgIos = withHOC(InnerSvgIos)

SvgIos.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgIos, {})
