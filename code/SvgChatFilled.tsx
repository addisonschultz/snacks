import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgChatFilled = props => {
    return <System.SvgChatFilled {...props}></System.SvgChatFilled>
}

export const SvgChatFilled = withHOC(InnerSvgChatFilled)

SvgChatFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgChatFilled, {})
