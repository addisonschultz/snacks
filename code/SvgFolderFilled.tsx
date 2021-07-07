import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFolderFilled = props => {
    return <System.SvgFolderFilled {...props}></System.SvgFolderFilled>
}

export const SvgFolderFilled = withHOC(InnerSvgFolderFilled)

SvgFolderFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFolderFilled, {})
