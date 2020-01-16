import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNavigationPills = props => {
    return <System.NavigationPills {...props}></System.NavigationPills>
}

export const NavigationPills = withHOC(InnerNavigationPills)

NavigationPills.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(NavigationPills, {
    pills: {
        title: "Pills",
        type: ControlType.Array,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    activePill: {
        title: "Active pill",
        type: ControlType.String,
    },
})
