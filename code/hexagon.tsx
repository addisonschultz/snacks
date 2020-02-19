
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function hexagon(props) {
  return (
    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M 50 20 L 75.981 35 L 75.981 65 L 50 80 L 24.019 65 L 24.019 35 Z"/>
</svg>
  );
};

addPropertyControls(hexagon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  