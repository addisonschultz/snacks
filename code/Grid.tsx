import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerGrid = props => {
    return <System.Grid {...props}></System.Grid>
}

export const Grid = withHOC(InnerGrid)

Grid.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Grid, {})
