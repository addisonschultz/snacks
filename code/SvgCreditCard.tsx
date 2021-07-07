import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCreditCard = props => {
    return <System.SvgCreditCard {...props}></System.SvgCreditCard>
}

export const SvgCreditCard = withHOC(InnerSvgCreditCard)

SvgCreditCard.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCreditCard, {})
