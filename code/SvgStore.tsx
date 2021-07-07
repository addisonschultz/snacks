import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgStore = props => {
    return <System.SvgStore {...props}></System.SvgStore>
}

export const SvgStore = withHOC(InnerSvgStore)

SvgStore.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgStore, {})
