import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgBarcode = props => {
    return <System.SvgBarcode {...props}></System.SvgBarcode>
}

export const SvgBarcode = withHOC(InnerSvgBarcode)

SvgBarcode.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgBarcode, {})
