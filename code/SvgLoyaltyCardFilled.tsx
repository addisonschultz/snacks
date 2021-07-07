import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLoyaltyCardFilled = props => {
    return <System.SvgLoyaltyCardFilled {...props}></System.SvgLoyaltyCardFilled>
}

export const SvgLoyaltyCardFilled = withHOC(InnerSvgLoyaltyCardFilled)

SvgLoyaltyCardFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLoyaltyCardFilled, {})
