import { tokens } from '../tokens/tokens';
import type { ThemeContract } from './contract';

export const darkTheme: ThemeContract = {
  colors: {
    primary: tokens.colors.green200,
    primary400to200: tokens.colors.green200,
    primaryHover: tokens.colors.green200, // TODO

    grey: tokens.colors.grey1000,
    grey25: tokens.colors.grey950,
    grey50: tokens.colors.grey900,
    grey50B: tokens.colors.grey900,
    grey100: tokens.colors.grey800,
    grey200: tokens.colors.grey700,
    grey300: tokens.colors.grey600,
    grey400: tokens.colors.grey500,
    grey500: tokens.colors.grey400,
    grey600: tokens.colors.grey300,
    grey700: tokens.colors.grey200,
    grey800: tokens.colors.grey100,
    grey900: tokens.colors.grey50,
    grey950: tokens.colors.grey25,
    grey1000: tokens.colors.grey0,

    greyA08: tokens.colors.greyA08,

    grey0to950: tokens.colors.grey950,
    grey0to800: tokens.colors.grey800,
    grey0to700: tokens.colors.grey700,
    grey25to900: tokens.colors.grey900,
    grey25to800: tokens.colors.grey800,
    grey50Bto800: tokens.colors.grey800,
    grey100to700: tokens.colors.grey700,
    grey100to700Hover: tokens.colors.grey600,
    grey950toPrimary: tokens.colors.green200,
    grey1000to1000: tokens.colors.grey1000,

    primary200: tokens.colors.primary200,
    primary500: tokens.colors.primary500,
    primary600: tokens.colors.primary600,
    primary700: tokens.colors.primary700,
    primary800: tokens.colors.primary800,

    shadow: tokens.colors.shadow,
    hover: tokens.colors.hover,
    blue: tokens.colors.blue,

    //TODO 삭제 예정
    green200: tokens.colors.green200,
    green400: tokens.colors.green400,
    green600: tokens.colors.green600,
    green800: tokens.colors.green800,

    pink200: tokens.colors.pink200,
    pink400: tokens.colors.pink400,
    pink600: tokens.colors.pink600,
    pink800: tokens.colors.pink800,

    orange200: tokens.colors.orange200,
    orange400: tokens.colors.orange400,
    orange800: tokens.colors.orange800,

    blue200: tokens.colors.blue200,
    blue400: tokens.colors.blue400,
    blue800: tokens.colors.blue800,

    violet0: tokens.colors.violet0,
    violet100: tokens.colors.violet100,
    violet200: tokens.colors.violet200,
    violet400: tokens.colors.violet400,
    violet800: tokens.colors.violet800,

    warning300: tokens.colors.warning300,
    warning500: tokens.colors.warning500,

    purple100: tokens.colors.purple100,
    purple200: tokens.colors.purple200,
    purple400: tokens.colors.purple400,
    purple600: tokens.colors.purple600,
    purple700: tokens.colors.purple700,
    purple800: tokens.colors.purple800,
  },
  space: tokens.spacing,
  borderRadius: tokens.radius,
  typography: tokens.typography,
};
