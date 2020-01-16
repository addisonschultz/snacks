import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgItemsFilled = props => {
    return <System.SvgItemsFilled {...props}></System.SvgItemsFilled>
}

export const SvgItemsFilled = withHOC(InnerSvgItemsFilled)

SvgItemsFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgItemsFilled, {})
