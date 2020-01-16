import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCouponsFilled = props => {
    return <System.SvgCouponsFilled {...props}></System.SvgCouponsFilled>
}

export const SvgCouponsFilled = withHOC(InnerSvgCouponsFilled)

SvgCouponsFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCouponsFilled, {})
