import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgMenu = props => {
    return <System.SvgMenu {...props}></System.SvgMenu>
}

export const SvgMenu = withHOC(InnerSvgMenu)

SvgMenu.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgMenu, {})
