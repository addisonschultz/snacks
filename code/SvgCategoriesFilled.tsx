import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCategoriesFilled = props => {
    return <System.SvgCategoriesFilled {...props}></System.SvgCategoriesFilled>
}

export const SvgCategoriesFilled = withHOC(InnerSvgCategoriesFilled)

SvgCategoriesFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCategoriesFilled, {})
