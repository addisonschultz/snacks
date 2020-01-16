import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgLock = props => {
    return <System.SvgLock {...props}></System.SvgLock>
}

export const SvgLock = withHOC(InnerSvgLock)

SvgLock.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgLock, {})
