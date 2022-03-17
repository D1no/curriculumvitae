import React, { ReactNode } from "react";

import { x } from "@xstyled/emotion";

import { goldenRatioElementSpacer, pxH } from "@cv/views/DesignSystem";

interface Layout {
  /**
   * Used for document outline & accessability.
   */
  headerLabel?: string;
  header?: ReactNode;
  /**
   * Used for document outline & accessability.
   */
  subHeaderLabel?: string;
  subHeader?: ReactNode;
  /**
   * Decorates children. Used for document outline & accessability.
   */
  mainLabel?: string;
  /**
   * Children are inside the `main` section.
   */
  children?: ReactNode;
  /**
   * Used for document outline & accessability.
   */
  footerLabel?: string;
  footer?: ReactNode;
}

/**
 * Returns a stacked column flexbox layout with vertical spacing. Labels are used for the document outline and accessability. So they should describe the
 * section content and not the position / role within the document (i.e. "footer"
 * Vs. "Additional References").
 */
const Layout: React.FC<Layout> = ({
  headerLabel = "Profile",
  header,
  subHeaderLabel = "Keywords & Contact",
  subHeader,
  mainLabel = "Main",
  children,
  footerLabel = "Export & Footnotes",
  footer,
}) => {
  return (
    <x.div
      h="100%"
      display="flex"
      flexDirection="column"
      spaceY={pxH(goldenRatioElementSpacer)}
    >
      {/* START: Page Sections */}

      {header ? (
        <x.section aria-label={headerLabel}>{header}</x.section>
      ) : undefined}

      {subHeader ? (
        <x.section aria-label={subHeaderLabel}>{subHeader}</x.section>
      ) : undefined}

      <x.section aria-label={mainLabel} flexGrow={1}>
        {children}
      </x.section>

      {footer ? (
        <x.section aria-label={footerLabel}>{footer}</x.section>
      ) : undefined}

      {/* END: Page Sections */}
    </x.div>
  );
};

export default Layout;
