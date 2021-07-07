import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLike = props => {
    return <System.SvgLike {...props}></System.SvgLike>
}

export const SvgLike = withHOC(InnerSvgLike)

SvgLike.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLike, {})
