import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAlcoholFilled = props => {
    return <System.SvgAlcoholFilled {...props}></System.SvgAlcoholFilled>
}

export const SvgAlcoholFilled = withHOC(InnerSvgAlcoholFilled)

SvgAlcoholFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAlcoholFilled, {})
