import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgZero = props => {
    return <System.SvgZero {...props}></System.SvgZero>
}

export const SvgZero = withHOC(InnerSvgZero)

SvgZero.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgZero, {})
