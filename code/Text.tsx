import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerText = props => {
    return <System.Text {...props}></System.Text>
}

export const Text = withHOC(InnerText)

Text.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Text, {
    variant: {
        title: "Variant",
        type: ControlType.Enum,
        options: [
            "T.92",
            "T.82",
            "T.72",
            "T.64",
            "T.58",
            "T.46",
            "T.36",
            "T.28",
            "T.22",
            "T.18",
            "T.16",
            "T.14",
            "T.12",
            "T.11",
        ],
        optionTitles: [
            "T.92",
            "T.82",
            "T.72",
            "T.64",
            "T.58",
            "T.46",
            "T.36",
            "T.28",
            "T.22",
            "T.18",
            "T.16",
            "T.14",
            "T.12",
            "T.11",
        ],
    },
    elementType: {
        title: "Element type",
        type: ControlType.String,
    },
    fontWeight: {
        title: "Font weight",
        type: ControlType.Enum,
        options: ["light", "regular", "semiBold", "bold"],
        optionTitles: ["light", "regular", "semi Bold", "bold"],
    },
})
