import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMoney = props => {
    return <System.SvgMoney {...props}></System.SvgMoney>
}

export const SvgMoney = withHOC(InnerSvgMoney)

SvgMoney.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMoney, {})
