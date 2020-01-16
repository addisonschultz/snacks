import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHelperText = props => {
    return <System.HelperText {...props}></System.HelperText>
}

export const HelperText = withHOC(InnerHelperText)

HelperText.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(HelperText, {
    helperText: {
        title: "Helper text",
        type: ControlType.String,
        defaultValue: "helperText",
    },
})
