import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGear = props => {
    return <System.SvgGear {...props}></System.SvgGear>
}

export const SvgGear = withHOC(InnerSvgGear)

SvgGear.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGear, {})
