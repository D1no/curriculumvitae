// Lucide-Icons: https://lucide.dev/
import React from "react";
import { Outlet } from "react-router-dom";

import { x } from "@xstyled/emotion";

import { ILayoutProps, L } from "containers/Layout/util";

import Navigation from "components/Navigation";

/**
 * Full screen layout container with a header, main and navigation section.
 * If child components are provided, those are rendered in the main section.
 * Otherwise the <Outlet /> of provided routes.
 */
const Layout: React.FC<ILayoutProps> = ({ debug = false, ...props }) => {
  return (
    <>
      <x.div display="flex" flexDirection="column">
        {/* Header */}
        <L debug={debug}>
          <x.header p={7}>
            <L debug={debug}>
              <x.div>
                <x.h1 fontWeight="bold" lineHeight="snug" text="xl">
                  Dino Scheidt
                </x.h1>
                <x.h4
                  color="hs-gold"
                  fontWeight="light"
                  lineHeight="normal"
                  text="xs"
                >
                  Engineering, Consulting
                  <br />& Due Diligence
                </x.h4>
              </x.div>
            </L>
          </x.header>
        </L>

        {/* Main Content (Outlet) */}
        <L debug={debug}>
          <x.main flexGrow={1} p={2}>
            {props.children ? props.children : <Outlet />}
          </x.main>
        </L>
      </x.div>
    </>
  );
};

export default Layout;
