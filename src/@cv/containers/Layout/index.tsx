import React from "react";

import FooterSection from "./sections/Footer";
import Header from "./sections/Header";
import MainSection from "./sections/Main";
import MetaSection from "./sections/Meta";

import { x } from "@xstyled/emotion";

import { goldenRatioElementSpacer, pxH } from "@cv/views/DesignSystem";

/**
 * Renders sections in a column flexbox layout with vertical spacing. Labels are
 * used for the document outline and accessability. So they should describe the
 * section content and not the position / role within the document (i.e. "footer"
 * Vs. "Additional References").
 */
interface Layout {
  /**
   * Used for document outline & accessability.
   */
  headerLabel?: string;
  header?: React.Component;
  /**
   * Used for document outline & accessability.
   */
  subHeaderLabel?: string;
  subHeader?: React.Component;
  /**
   * Used for document outline & accessability.
   */
  mainLabel?: string;
  main?: React.Component;
  /**
   * Overwrites `main` prop.
   */
  children?: React.Component;
  /**
   * Used for document outline & accessability.
   */
  footerLabel?: string;
  footer?: React.Component;
}

const Layout: React.FC<Layout> = ({
  headerLabel = "Profile",
  header = <Header />,
  subHeaderLabel = "Keywords & Contact",
  subHeader = <MetaSection />,
  mainLabel = "Overview",
  main = <MainSection />,
  children = main,
  footerLabel = "Export & Footnotes",
  footer = <FooterSection />,
}) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      spaceY={pxH(goldenRatioElementSpacer)}
    >
      {/* START: CV Sections */}

      <x.section aria-label={headerLabel}>{header}</x.section>
      <x.section aria-label={subHeaderLabel}>{subHeader}</x.section>
      <x.section aria-label={mainLabel}>{children}</x.section>
      <x.section aria-label={footerLabel}>{footer}</x.section>

      {/* END: CV Sections */}
    </x.div>
  );
};

export default Layout;
