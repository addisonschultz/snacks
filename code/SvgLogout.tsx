import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLogout = props => {
    return <System.SvgLogout {...props}></System.SvgLogout>
}

export const SvgLogout = withHOC(InnerSvgLogout)

SvgLogout.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLogout, {})
