import * as React from "react"
import * as System from "ic-snacks"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLink = props => {
    return <System.Link {...props}></System.Link>
}

export const Link = withHOC(InnerLink)

Link.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Link, {
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "#",
    },
})
