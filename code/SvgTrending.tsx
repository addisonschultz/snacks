import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgTrending = props => {
    return <System.SvgTrending {...props}></System.SvgTrending>
}

export const SvgTrending = withHOC(InnerSvgTrending)

SvgTrending.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgTrending, {})
