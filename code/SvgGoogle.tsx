import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGoogle = props => {
    return <System.SvgGoogle {...props}></System.SvgGoogle>
}

export const SvgGoogle = withHOC(InnerSvgGoogle)

SvgGoogle.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGoogle, {})
