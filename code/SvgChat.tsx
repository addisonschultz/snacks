import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgChat = props => {
    return <System.SvgChat {...props}></System.SvgChat>
}

export const SvgChat = withHOC(InnerSvgChat)

SvgChat.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgChat, {})
