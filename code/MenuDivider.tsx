import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerMenuDivider = props => {
    return <System.MenuDivider {...props}></System.MenuDivider>
}

export const MenuDivider = withHOC(InnerMenuDivider)

MenuDivider.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(MenuDivider, {})
