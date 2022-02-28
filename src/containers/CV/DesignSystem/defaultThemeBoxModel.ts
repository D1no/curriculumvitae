import { defaultTheme } from "@xstyled/emotion";

const boxModel = {};

/**
 * Selection of box model relevant theme preset objects eligible for auto processing.
 */
type legalBoxModelSubGroups =
  | typeof defaultTheme["space"]
  | typeof defaultTheme["sizes"]
  | typeof defaultTheme["radii"]
  | typeof defaultTheme["fontSizes"]
  | typeof defaultTheme["lineHeights"];

/**
 * Ability to replace parts of strings within xStyles default theme presets.
 * Defaults to rem -> em. Only assignable to box model related presets.
 */
const replaceUnitInBoxModel = (
  boxModelGroup: legalBoxModelSubGroups,
  findUnit = "rem",
  replaceWith = "em",
): legalBoxModelSubGroups => {
  // Iterate over presets
  Object.entries(boxModelGroup).forEach(([preset, style]) => {
    // TODO: Typescript - This could be cleaner but no time to type upstream.

    if (typeof style === "string" || style instanceof String) {
      // Explanation: This is the infamous "not assignable to never" guard for "improperly" instantiated arrays.

      // https://stackoverflow.com/questions/68075836/how-to-fix-type-string-is-not-assignable-to-type-never#comment120321098_68075836
      // @ts-expect-error TS2322: Type 'string' is not assignable to type 'never'.
      boxModelGroup[preset as keyof typeof boxModelGroup] = style.replace(
        findUnit,
        replaceWith,
      );
    }
  });

  return boxModelGroup;
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
    ...replaceUnitInBoxModel(defaultTheme.space),
  },
  size: {
    ...replaceUnitInBoxModel(defaultTheme.sizes),
  },
  radii: {
    ...replaceUnitInBoxModel(defaultTheme.radii),
  },
  fontSizes: {
    ...replaceUnitInBoxModel(defaultTheme.fontSizes),
  },
  lineHeights: {
    ...replaceUnitInBoxModel(defaultTheme.lineHeights),
  },
};

console.dir(defaultThemeBoxModel);

export default defaultThemeBoxModel;
