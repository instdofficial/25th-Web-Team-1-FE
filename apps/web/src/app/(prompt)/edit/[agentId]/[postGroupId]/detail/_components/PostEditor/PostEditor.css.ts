import { vars } from '@repo/theme';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  height: '100%',

  border: `0.2rem solid ${vars.colors.grey50}`,
  borderRadius: vars.borderRadius[16],
  display: 'flex',
  flexDirection: 'column',
});

export const toolBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.6rem 1.2rem',
  borderBottom: `0.2rem solid ${vars.colors.grey50}`,
});

export const saveArea = style({
  display: 'flex',
  gap: '2.4rem',
  alignItems: 'center',
});

export const tools = style({
  position: 'relative',
});

export const emojiPicker = style({
  position: 'absolute',
  zIndex: '3',
  top: '5.9rem',
});

export const textarea = style({
  all: 'unset',
  lineHeight: '170%',
  letterSpacing: '-0.032rem',
  fontWeight: vars.typography.fontWeight.medium,
  fontSize: vars.typography.fontSize[16],
  color: vars.colors.grey800,
  width: '100%',
  resize: 'none',
  overflow: 'visible',
  background: 'transparent',
});

export const editArea = style({
  padding: '2.4rem',
  flex: 1,
  width: '100%',
  overflow: 'scroll',
});
