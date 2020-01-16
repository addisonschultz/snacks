import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgCalendar = props => {
    return <System.SvgCalendar {...props}></System.SvgCalendar>
}

export const SvgCalendar = withHOC(InnerSvgCalendar)

SvgCalendar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgCalendar, {})
