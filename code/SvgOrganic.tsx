import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrganic = props => {
    return <System.SvgOrganic {...props}></System.SvgOrganic>
}

export const SvgOrganic = withHOC(InnerSvgOrganic)

SvgOrganic.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrganic, {})
