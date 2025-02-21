import { vars } from '@repo/theme';
import { style } from '@vanilla-extract/css';

export const card = style({
  width: '100%',
  minWidth: '62.8rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  borderRadius: vars.borderRadius[24],
  backgroundColor: vars.colors.grey,
  padding: '2.8rem 3.2rem',
  cursor: 'pointer',

  ':hover': {
    boxShadow: '0rem 1.6rem 1.6rem 0rem rgba(74, 98, 139, 0.10)',
  },
});

export const cardText = style({
  display: 'flex',
  width: '100%',
  gap: '2.7rem',
  justifyContent: 'space-between',
  flexShrink: 0,
});

export const createImage = style({
  width: '30rem',
  height: '17rem',
});

export const leftText = style({
  display: 'flex',
  gap: '1.6rem',
});

export const chipArea = style({
  display: 'flex',
  gap: '0.8rem',
});

export const cursorPointer = style({
  cursor: 'pointer',
});

export const chip = style({
  display: 'inline-block',
  maxWidth: '19.25rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'keep-all',
});

export const introductionText = style({
  overflow: 'hidden',
  whiteSpace: 'normal',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  wordBreak: 'keep-all',
  lineHeight: '170%',
});
