import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Preflight,
  ThemeProvider,
  defaultTheme,
  generateHexAlphaVariants,
} from "@xstyled/emotion";

import Introduction from "views/Introduction";

import Layout from "containers/Layout";

import About from "./About";
import Showcase from "./Showcase";

/**
 * Customized xStyled based theme object used in design system.
 */
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    // Adding Color: Hundertschaft "Gold"
    // #B98C18
    // Generates 'hs-gold-a10', 'hs-gold-a20', ...
    ...generateHexAlphaVariants({
      "hs-gold": "#B98C18",
    }),
  },
};

/**
 * Required for any styled outside rendering (like storybook, jest).
 * Higher order component that wraps child components into required theme provider.
 */
export const DesignSystem: React.FC = (props) => (
  <ThemeProvider theme={theme}>
    <Preflight />
    {props.children}
  </ThemeProvider>
);

/**
 * Set-Up routing and view relationship here.
 * Delegates all routing and views with respect to layout components.
 */
const Views = () => {
  return (
    <BrowserRouter>
      <DesignSystem>
        {/* START: Website Routing */}

        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<Introduction />} path="" />
          </Route>
          <Route element={<Layout />} path="/showcase">
            <Route element={<Showcase />} path="" />
          </Route>
          <Route element={<Layout debug />} path="/about">
            <Route element={<About />} path="" />
          </Route>
        </Routes>

        {/* END: Website Routing */}
      </DesignSystem>
    </BrowserRouter>
  );
};

export default Views;
