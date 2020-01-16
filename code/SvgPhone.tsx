import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPhone = props => {
    return <System.SvgPhone {...props}></System.SvgPhone>
}

export const SvgPhone = withHOC(InnerSvgPhone)

SvgPhone.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPhone, {})
