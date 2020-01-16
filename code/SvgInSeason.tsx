import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgInSeason = props => {
    return <System.SvgInSeason {...props}></System.SvgInSeason>
}

export const SvgInSeason = withHOC(InnerSvgInSeason)

SvgInSeason.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgInSeason, {})
