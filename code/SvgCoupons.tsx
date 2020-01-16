import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCoupons = props => {
    return <System.SvgCoupons {...props}></System.SvgCoupons>
}

export const SvgCoupons = withHOC(InnerSvgCoupons)

SvgCoupons.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCoupons, {})
