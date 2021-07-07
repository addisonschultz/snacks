import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBag = props => {
    return <System.SvgBag {...props}></System.SvgBag>
}

export const SvgBag = withHOC(InnerSvgBag)

SvgBag.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBag, {})
