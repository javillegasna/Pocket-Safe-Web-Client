import React, { forwardRef } from 'react';

import { Fade, Box, Grow } from '@mui/material';
export const enum TransitionsType {
  fade = 'fade',
  grow = 'grow',
  zoom = 'zoom',
  slide = 'slide',
  collapse = 'collapse',
}
export const enum TransitionsPositions {
  top = 'top',
  topLeft = 'top-left',
  topRight = 'top-right',

  bottom = 'bottom',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
}
interface ITransitions {
  children: React.ReactNode;
  position?: TransitionsPositions;
  type?: TransitionsType;
}

const Transitions = forwardRef(({ children, position, type, ...others }: ITransitions, ref) => {
  let positionSX = {
    transformOrigin: '0 0 0'
  };

  switch (position) {
    case TransitionsPositions.bottomRight:
    case TransitionsPositions.top:
    case TransitionsPositions.bottomLeft:
    case TransitionsPositions.bottomRight:
    case TransitionsPositions.bottom:
    case TransitionsPositions.topLeft:
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      };
      break;
  }

  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}
      {type === 'fade' && (
        <Fade
          {...others}
          timeout={{
            appear: 0,
            enter: 300,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}
    </Box>
  );
});

export default Transitions;