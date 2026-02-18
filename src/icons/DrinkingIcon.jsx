import React from 'react';
import { SvgIcon } from '@mui/material';

function DrinkingIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g>
        {/* Head outline */}
        <path
          d="M 8 4 C 6 4 4.5 5.5 4.5 7.5 C 4.5 8.5 4.8 9.4 5.3 10.2 L 5.3 10.2 C 5.1 11.2 5 12.3 5 13.5 C 5 16 6 18 7.5 19 C 8 19.3 8.5 19.5 9 19.6 L 9 20.5 C 9 21.3 9.7 22 10.5 22 C 11.3 22 12 21.3 12 20.5 L 12 19.5 C 13 19.3 13.8 18.8 14.5 18 C 15.5 16.8 16 15 16 13 C 16 12 15.9 11.1 15.7 10.3 C 16.2 9.5 16.5 8.6 16.5 7.5 C 16.5 5.5 15 4 13 4 C 12 4 11.1 4.4 10.5 5 C 9.9 4.4 9 4 8 4 Z"
          fill="currentColor"
          opacity="0.3"
        />
        
        {/* Glass */}
        <path
          d="M 15.5 8 L 17 8 L 18.5 15 C 18.7 16 18 17 17 17 L 15 17 C 14 17 13.3 16 13.5 15 L 15.5 8 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Water in glass */}
        <path
          d="M 15.7 9 L 17.8 14.5 C 17.9 15 17.6 15.5 17 15.5 L 15.3 15.5 C 14.7 15.5 14.4 15 14.5 14.5 L 15.7 9 Z"
          fill="currentColor"
          opacity="0.5"
        />
        
        {/* Mouth/drinking action */}
        <ellipse
          cx="13.5"
          cy="12"
          rx="1.5"
          ry="1"
          fill="currentColor"
        />
      </g>
    </SvgIcon>
  );
}

export default DrinkingIcon;
