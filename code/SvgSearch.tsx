import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgSearch = props => {
    return <System.SvgSearch {...props}></System.SvgSearch>
}

export const SvgSearch = withHOC(InnerSvgSearch)

SvgSearch.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgSearch, {})
