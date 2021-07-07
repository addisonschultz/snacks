import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgStar = props => {
    return <System.SvgStar {...props}></System.SvgStar>
}

export const SvgStar = withHOC(InnerSvgStar)

SvgStar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgStar, {})
