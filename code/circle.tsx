
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function circle(props) {
  return (
    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M 50 20 C 66.569 20 80 33.431 80 50 C 80 66.569 66.569 80 50 80 C 33.431 80 20 66.569 20 50 C 20 33.431 33.431 20 50 20 Z" fill="#22CC88"/>
</svg>
  );
};

addPropertyControls(circle, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  