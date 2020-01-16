import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPhoneFilled = props => {
    return <System.SvgPhoneFilled {...props}></System.SvgPhoneFilled>
}

export const SvgPhoneFilled = withHOC(InnerSvgPhoneFilled)

SvgPhoneFilled.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPhoneFilled, {})
