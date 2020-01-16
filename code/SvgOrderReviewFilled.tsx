import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrderReviewFilled = props => {
    return <System.SvgOrderReviewFilled {...props}></System.SvgOrderReviewFilled>
}

export const SvgOrderReviewFilled = withHOC(InnerSvgOrderReviewFilled)

SvgOrderReviewFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrderReviewFilled, {})
