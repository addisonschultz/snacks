import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgPhotoMissing = props => {
    return <System.SvgPhotoMissing {...props}></System.SvgPhotoMissing>
}

export const SvgPhotoMissing = withHOC(InnerSvgPhotoMissing)

SvgPhotoMissing.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgPhotoMissing, {})
