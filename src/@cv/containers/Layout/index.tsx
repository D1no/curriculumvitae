import React from "react";

import FooterSection from "./sections/Footer";
import Header from "./sections/Header";
import MainSection from "./sections/Main";
import MetaSection from "./sections/Meta";

import { x } from "@xstyled/emotion";

import { goldenRatioElementSpacer, pxH } from "@cv/views/DesignSystem";

interface Layout {}

const Layout: React.FC<Layout> = ({ children, ...props }) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      spaceY={pxH(goldenRatioElementSpacer)}
    >
      {/* START: CV Sections */}

      <Header />
      <MetaSection />
      <MainSection />

      {/* Footer */}
      <FooterSection />
      {/* END: Footer */}
      {/* END: CV Sections */}
    </x.div>
  );
};

export default Layout;
