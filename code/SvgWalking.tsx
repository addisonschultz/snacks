import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgWalking = props => {
    return <System.SvgWalking {...props}></System.SvgWalking>
}

export const SvgWalking = withHOC(InnerSvgWalking)

SvgWalking.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgWalking, {})
