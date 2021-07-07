import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerRow = props => {
    return <System.Row {...props}></System.Row>
}

export const Row = withHOC(InnerRow)

Row.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Row, {
    forceFullPage: {
        title: "Force full page",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    maxColumns: {
        title: "Max columns",
        type: ControlType.Number,
        defaultValue: 14,
    },
})
