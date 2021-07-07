import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgParking = props => {
    return <System.SvgParking {...props}></System.SvgParking>
}

export const SvgParking = withHOC(InnerSvgParking)

SvgParking.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgParking, {})
