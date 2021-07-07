import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrderReview = props => {
    return <System.SvgOrderReview {...props}></System.SvgOrderReview>
}

export const SvgOrderReview = withHOC(InnerSvgOrderReview)

SvgOrderReview.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrderReview, {})
