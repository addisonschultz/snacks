import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSaveForLater = props => {
    return <System.SvgSaveForLater {...props}></System.SvgSaveForLater>
}

export const SvgSaveForLater = withHOC(InnerSvgSaveForLater)

SvgSaveForLater.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSaveForLater, {})
