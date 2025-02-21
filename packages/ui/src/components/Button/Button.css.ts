import { vars } from '@repo/theme';
import { styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const buttonRecipe = recipe({
  base: {
    display: 'inline-flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    height: 'fit-content',
    lineHeight: '150%',
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },

  variants: {
    size: {
      large: {
        borderRadius: vars.borderRadius[12],
        fontSize: vars.typography.fontSize[20],
        fontWeight: vars.typography.fontWeight.semibold,
      },
      small: {
        borderRadius: vars.borderRadius[8],
        fontSize: vars.typography.fontSize[18],
        fontWeight: vars.typography.fontWeight.semibold,
      },
    },

    variant: {
      primary: {
        backgroundColor: vars.colors.primary700,
        color: vars.colors.grey,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.primary600,
            color: vars.colors.grey,
          },
          '&:disabled': {
            backgroundColor: vars.colors.grey200,
            color: vars.colors.grey,
          },
        },
      },
      neutral: {
        backgroundColor: vars.colors.grey950,
        color: vars.colors.grey,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.grey700,
            color: vars.colors.grey,
          },
          '&:disabled': {
            backgroundColor: vars.colors.grey200,
            color: vars.colors.grey,
          },
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: vars.colors.grey1000,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.grey50,
            color: vars.colors.grey1000,
          },
          '&:disabled': {
            // TODO 디자이너 분들이 지정해 주시면 스타일 수정 필요
            backgroundColor: vars.colors.grey200,
            color: vars.colors.grey,
          },
        },
      },
      line: {
        border: '0.2rem solid transparent',
        backgroundClip: 'padding-box',
        backgroundColor: vars.colors.purple100,
        color: vars.colors.primary800,

        selectors: {
          '&:hover': {
            color: vars.colors.primary800,
            backgroundColor: vars.colors.purple100,
          },
          '&:disabled': {
            backgroundColor: vars.colors.grey,
            color: vars.colors.grey200,
            borderColor: vars.colors.grey100,
          },
        },
      },
    },

    isLoading: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      false: {},
    },
  },
});

export const buttonChildrenRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    isLoading: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        visibility: 'hidden',
      },
      false: {
        visibility: 'visible',
      },
    },

    size: {
      large: {
        gap: '0.8rem',
        padding: '1.2rem 1.8rem',
      },
      small: {
        gap: '0.4rem',
        padding: '0.8rem 2rem',
      },
    },
  },
});

export const spinner = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
  },

  variants: {
    size: {
      large: {},
      small: {},
    },
    isLoading: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { size: 'large', isLoading: true },
      style: {
        padding: '0.7rem 5.45rem',
      },
    },
    {
      variants: { size: 'small', isLoading: true },
      style: {
        padding: '0.55rem 2rem',
      },
    },
  ],
});

export type ButtonRecipeVariants = RecipeVariants<typeof buttonRecipe>;

export const addonRootStyle = styleVariants({
  large: {
    width: '2.0rem',
    height: '2.0rem',
  },
  small: {
    width: '1.6rem',
    height: '1.6rem',
  },
});
