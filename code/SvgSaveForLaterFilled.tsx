import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSaveForLaterFilled = props => {
    return <System.SvgSaveForLaterFilled {...props}></System.SvgSaveForLaterFilled>
}

export const SvgSaveForLaterFilled = withHOC(InnerSvgSaveForLaterFilled)

SvgSaveForLaterFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSaveForLaterFilled, {})
