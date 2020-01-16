import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGiftcard = props => {
    return <System.SvgGiftcard {...props}></System.SvgGiftcard>
}

export const SvgGiftcard = withHOC(InnerSvgGiftcard)

SvgGiftcard.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGiftcard, {})
