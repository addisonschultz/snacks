import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgAccount = props => {
    return <System.SvgAccount {...props}></System.SvgAccount>
}

export const SvgAccount = withHOC(InnerSvgAccount)

SvgAccount.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgAccount, {})
