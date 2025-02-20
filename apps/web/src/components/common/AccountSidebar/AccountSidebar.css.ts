import { style } from '@vanilla-extract/css';

export const wrapper = style({
  minWidth: '36.8rem',
  minHeight: '100vh',
  margin: '0 0 0 1.6rem',
  backgroundColor: 'transparent',
  overflow: 'auto',
  background:
    'linear-gradient(0deg, #F6F7FC 0%, #F6F7FC 100%), linear-gradient(180deg, #F8F8FF 0%, #F4F5F9 48.16%, #E9F0FA 84.19%)',
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2.65rem 1.2rem 1.45rem 1.2rem',
});
