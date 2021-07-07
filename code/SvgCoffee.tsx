import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCoffee = props => {
    return <System.SvgCoffee {...props}></System.SvgCoffee>
}

export const SvgCoffee = withHOC(InnerSvgCoffee)

SvgCoffee.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCoffee, {})
