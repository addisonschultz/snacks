import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAlcohol = props => {
    return <System.SvgAlcohol {...props}></System.SvgAlcohol>
}

export const SvgAlcohol = withHOC(InnerSvgAlcohol)

SvgAlcohol.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAlcohol, {})
