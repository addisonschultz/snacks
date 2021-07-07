import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgTwitter = props => {
    return <System.SvgTwitter {...props}></System.SvgTwitter>
}

export const SvgTwitter = withHOC(InnerSvgTwitter)

SvgTwitter.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgTwitter, {})
