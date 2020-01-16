import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPersonAdd = props => {
    return <System.SvgPersonAdd {...props}></System.SvgPersonAdd>
}

export const SvgPersonAdd = withHOC(InnerSvgPersonAdd)

SvgPersonAdd.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPersonAdd, {})
