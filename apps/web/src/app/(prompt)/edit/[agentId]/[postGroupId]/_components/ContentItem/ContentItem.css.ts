import { vars } from '@repo/theme';
import { createVar, style } from '@vanilla-extract/css';

export const backgroundVar = createVar();

export const contentItemStyle = style({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1.6rem',
  height: '6.4rem',
  width: '100%',
  padding: '1.6rem 0.8rem 1.2rem 1.2rem',
  cursor: 'grab',
  backgroundColor: backgroundVar,
});

export const imageStyle = style({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: vars.borderRadius[4],
});

export const summaryStyle = style({
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginRight: '0.8rem',
});

export const noShrinkStyle = style({
  flexShrink: 0,
});

export const timeStyle = style({
  display: 'block',

  selectors: {
    [`${contentItemStyle}:hover &`]: {
      display: 'none',
    },
  },
});

export const iconHoverStyle = style({
  display: 'none',
  pointerEvents: 'none',

  selectors: {
    [`${contentItemStyle}:hover &`]: {
      display: 'flex',
      pointerEvents: 'auto',
    },
  },
});
