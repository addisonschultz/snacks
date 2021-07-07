import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgView = props => {
    return <System.SvgView {...props}></System.SvgView>
}

export const SvgView = withHOC(InnerSvgView)

SvgView.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgView, {})
