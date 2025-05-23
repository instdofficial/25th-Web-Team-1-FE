import { vars } from '@repo/theme';
import { style } from '@vanilla-extract/css';

export const accordionRoot = style({
  width: '100%',
});

export const accordionTrigger = style({
  width: 'fit-content',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.8rem',
});

export const accordionContentHidden = style({
  display: 'none',
});
