import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGift = props => {
    return <System.SvgGift {...props}></System.SvgGift>
}

export const SvgGift = withHOC(InnerSvgGift)

SvgGift.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGift, {})
