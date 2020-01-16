import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCarFilled = props => {
    return <System.SvgCarFilled {...props}></System.SvgCarFilled>
}

export const SvgCarFilled = withHOC(InnerSvgCarFilled)

SvgCarFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCarFilled, {})
