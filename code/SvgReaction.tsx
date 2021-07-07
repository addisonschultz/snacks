import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgReaction = props => {
    return <System.SvgReaction {...props}></System.SvgReaction>
}

export const SvgReaction = withHOC(InnerSvgReaction)

SvgReaction.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgReaction, {})
