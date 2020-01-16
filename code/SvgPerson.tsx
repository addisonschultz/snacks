import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPerson = props => {
    return <System.SvgPerson {...props}></System.SvgPerson>
}

export const SvgPerson = withHOC(InnerSvgPerson)

SvgPerson.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPerson, {})
