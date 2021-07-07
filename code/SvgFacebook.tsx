import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgFacebook = props => {
    return <System.SvgFacebook {...props}></System.SvgFacebook>
}

export const SvgFacebook = withHOC(InnerSvgFacebook)

SvgFacebook.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgFacebook, {})
