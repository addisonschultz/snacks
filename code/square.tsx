
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function square(props) {
  return (
    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M 20 20 L 80 20 L 80 80 L 20 80 Z"/>
</svg>
  );
};

addPropertyControls(square, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  