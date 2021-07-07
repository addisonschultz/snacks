import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgTobacco = props => {
    return <System.SvgTobacco {...props}></System.SvgTobacco>
}

export const SvgTobacco = withHOC(InnerSvgTobacco)

SvgTobacco.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgTobacco, {})
