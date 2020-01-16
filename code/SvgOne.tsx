import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOne = props => {
    return <System.SvgOne {...props}></System.SvgOne>
}

export const SvgOne = withHOC(InnerSvgOne)

SvgOne.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOne, {})
