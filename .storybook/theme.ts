import { themes } from "@storybook/theming";

const branding = {
  // Storybook sadly does not take a react component here. Therefore the inline HTML tags.
  brandTitle:
    "Dino Scheidt<br/><small><sup>My CV... Application...</sup></small>",
};

/**
 * Tweaked default storybook theme.
 * See: https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart
 */
const theme = {
  // TODO: Take another look at colors. I.e. the folder icon shouldn't be red in dark mode.
  dark: { ...themes.dark, ...branding },
  normal: { ...themes.normal, ...branding },
};

export default theme;
