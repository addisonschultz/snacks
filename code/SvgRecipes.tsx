import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSvgRecipes = props => {
    return <System.SvgRecipes {...props}></System.SvgRecipes>
}

export const SvgRecipes = withHOC(InnerSvgRecipes)

SvgRecipes.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SvgRecipes, {})
