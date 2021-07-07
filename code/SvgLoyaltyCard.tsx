import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLoyaltyCard = props => {
    return <System.SvgLoyaltyCard {...props}></System.SvgLoyaltyCard>
}

export const SvgLoyaltyCard = withHOC(InnerSvgLoyaltyCard)

SvgLoyaltyCard.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLoyaltyCard, {})
