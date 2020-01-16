import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSale = props => {
    return <System.SvgSale {...props}></System.SvgSale>
}

export const SvgSale = withHOC(InnerSvgSale)

SvgSale.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSale, {})
