import { style } from '@vanilla-extract/css';
import { vars } from '@repo/theme';

export const mainStyle = style({
  position: 'relative',
  minHeight: '100vh',
  paddingTop: '8rem',
  display: 'flex',
  overflowX: 'auto',
  backgroundColor: vars.colors.grey,
});

export const image = style({
  borderRadius: '100%',
  width: '4rem',
  height: '4rem',
  backgroundColor: vars.colors.grey25,
  border: `0.1rem solid ${vars.colors.grey200}`,
  objectFit: 'cover',
});

export const dropdownItem = style({
  padding: '1.45rem 1.6rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const contentWrapperStyle = style({
  position: 'relative',
  flex: 1,
  padding: `0 ${vars.space[40]}`,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  //marginLeft: '44rem', // TODO: 사이드바가 fixed로 수정되면 주석 해제
  //maxWidth: '144rem',
});

export const formSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100rem',
  margin: '0 auto',
});

export const titleSectionStyle = style({
  width: '100%',
  marginBottom: vars.space[32],
});

export const submitButtonStyle = style({
  width: '100%',
  height: '7.2rem',
});

export const utteranceWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[16],
});
