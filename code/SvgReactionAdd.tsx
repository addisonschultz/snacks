import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgReactionAdd = props => {
    return <System.SvgReactionAdd {...props}></System.SvgReactionAdd>
}

export const SvgReactionAdd = withHOC(InnerSvgReactionAdd)

SvgReactionAdd.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgReactionAdd, {})
