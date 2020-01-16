
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
import { circle } from ".//circle";
import { half-circle } from ".//half-circle";
import { hexagon } from ".//hexagon";
import { square } from ".//square";
import { star } from ".//star";


const icons = {
  "/circle": circle,
  "/half-circle": half-circle,
  "/hexagon": hexagon,
  "/square": square,
  "/star": star,
};

export function Icon(props) {
  const NamedIcon = icons[props.icon];
  return <NamedIcon {...props}/>
};

addPropertyControls(Icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  },
  icon: {
    type: ControlType.Enum,
    options: ["/circle","/half-circle","/hexagon","/square","/star"]
  }
});
    