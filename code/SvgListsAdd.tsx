import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgListsAdd = props => {
    return <System.SvgListsAdd {...props}></System.SvgListsAdd>
}

export const SvgListsAdd = withHOC(InnerSvgListsAdd)

SvgListsAdd.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgListsAdd, {})
