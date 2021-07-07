import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNavigationPill = props => {
    return <System.NavigationPill {...props}></System.NavigationPill>
}

export const NavigationPill = withHOC(InnerNavigationPill)

NavigationPill.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(NavigationPill, {
    isActive: {
        title: "Is active",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    path: {
        title: "Path",
        type: ControlType.String,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "text",
    },
})
