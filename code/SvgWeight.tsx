import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgWeight = props => {
    return <System.SvgWeight {...props}></System.SvgWeight>
}

export const SvgWeight = withHOC(InnerSvgWeight)

SvgWeight.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgWeight, {})
