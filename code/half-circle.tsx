
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function half-circle(props) {
  return (
    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M 80 50 C 80 66.569 66.569 80 50 80 C 33.431 80 20 66.569 20 50 Z"/>
</svg>
  );
};

addPropertyControls(half-circle, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  