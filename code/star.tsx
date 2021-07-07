
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function star(props) {
  return (
    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="M 50 20 L 58.817 37.865 L 78.532 40.729 L 64.266 54.635 L 67.634 74.271 L 50 65 L 32.366 74.271 L 35.734 54.635 L 21.468 40.729 L 41.183 37.865 Z"/>
</svg>
  );
};

addPropertyControls(star, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  