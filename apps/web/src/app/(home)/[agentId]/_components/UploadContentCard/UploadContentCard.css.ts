import { vars } from '@repo/theme';
import { style } from '@vanilla-extract/css';

export const card = style({
  width: '100%',
  minWidth: '62.8rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  borderRadius: vars.borderRadius[24],
  backgroundColor: vars.colors.grey,
  padding: '1.95rem 2rem',
});

export const cardText = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  flexShrink: 0,
  paddingLeft: '1.2rem',
});

export const leftText = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

export const uploadContentItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: vars.borderRadius[12],
  padding: '1.2rem 1.6rem 1.2rem 1.2rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, padding 0.3s ease',
  ':hover': {
    backgroundColor: vars.colors.hover,
    padding: '1.2rem 1.6rem 1.2rem 2rem',
  },
});

export const uploadContentSummary = style({
  display: 'inline-block',
  maxWidth: '33.2rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

export const content = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const emptyImage = style({
  width: '17.2rem',
  height: '9rem',
});
