import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPlayStore = props => {
    return <System.SvgPlayStore {...props}></System.SvgPlayStore>
}

export const SvgPlayStore = withHOC(InnerSvgPlayStore)

SvgPlayStore.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPlayStore, {})
