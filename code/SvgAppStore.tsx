import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAppStore = props => {
    return <System.SvgAppStore {...props}></System.SvgAppStore>
}

export const SvgAppStore = withHOC(InnerSvgAppStore)

SvgAppStore.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAppStore, {})
