import React from "react";

import FooterSection from "./Footer";
import Header from "./Header";
import MainSection from "./Main";
import MetaSection from "./Meta";

import { x } from "@xstyled/emotion";

import {
  goldenRatioContentSpacer,
  goldenRatioElementSpacer,
  goldenRatioPageHeight,
  goldenRatioPageMargin,
  goldenRatioPageWidth,
  pxH,
  pxW,
} from "@cv/views/DesignSystem";

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
