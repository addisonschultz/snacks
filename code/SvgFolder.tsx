import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFolder = props => {
    return <System.SvgFolder {...props}></System.SvgFolder>
}

export const SvgFolder = withHOC(InnerSvgFolder)

SvgFolder.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFolder, {})
