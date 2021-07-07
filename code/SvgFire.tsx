import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFire = props => {
    return <System.SvgFire {...props}></System.SvgFire>
}

export const SvgFire = withHOC(InnerSvgFire)

SvgFire.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFire, {})
