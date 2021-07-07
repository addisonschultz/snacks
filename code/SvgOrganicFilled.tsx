import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgOrganicFilled = props => {
    return <System.SvgOrganicFilled {...props}></System.SvgOrganicFilled>
}

export const SvgOrganicFilled = withHOC(InnerSvgOrganicFilled)

SvgOrganicFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgOrganicFilled, {})
