import { defaultTheme } from "@xstyled/emotion";

/**
 * CV BoxModel Extension.
 * (Over)writes into default theme.
 */
const boxModel = {
  space: {},
  sizes: {},
  radii: {},
  fontSizes: {},
  lineHeights: {},
};

/**
 * Applying Box Model to default xStyled Theme Object.
 *
 * Since xStyled uses "rem" by default, this also insures that the
 * CV Design System uses "em": referencing the parent font size
 * of 8px instead of the global 16px while still being able to be
 * nested into other design systems.
 */
const defaultThemeBoxModel = {
  ...defaultTheme,
  space: {
    ...defaultTheme.space,
    ...boxModel.space,
  },
  sizes: {
    ...defaultTheme.sizes,
    ...boxModel.sizes,
  },
  radii: {
    ...defaultTheme.radii,
    ...boxModel.radii,
  },
  fontSizes: {
    ...defaultTheme.fontSizes,
    ...boxModel.fontSizes,
  },
  lineHeights: {
    ...defaultTheme.lineHeights,
    ...boxModel.lineHeights,
  },
};

export default defaultThemeBoxModel;
