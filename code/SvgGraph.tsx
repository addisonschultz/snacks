import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgGraph = props => {
    return <System.SvgGraph {...props}></System.SvgGraph>
}

export const SvgGraph = withHOC(InnerSvgGraph)

SvgGraph.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgGraph, {})
