import { style } from '@vanilla-extract/css';

export const tableContainer = style({
  position: 'relative',
  width: '100%',
});

export const draggableOverlay = style({
  position: 'absolute',
  top: '4rem',
  right: 0,
  width: '52.5rem',
});

export const itemsContainer = style({
  display: 'flex',
  flexDirection: 'column',
});
