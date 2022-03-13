import React from "react";

import Layout from "@cv/containers/Layout";
import Header from "@cv/containers/Layout/sections/Header";

import FooterSection from "../Layout/sections/Footer";
import MainSection from "../Layout/sections/Main";
import MetaSection from "../Layout/sections/Meta";
import Paper from "./paper";

interface Page extends Paper {}

/**
 * Renders a page according to size scaled by the design system.
 */
const Page: React.FC<Page> = ({
  children,
  size,
  overwriteCssSpec,
  ...props
}) => {
  return (
    <Paper size={size} overwriteCssSpec={overwriteCssSpec}>
      <Layout
        headerLabel="Profile"
        header={<Header />}
        subHeaderLabel="Keywords & Contact"
        subHeader={<MetaSection />}
        footerLabel="Export & Footnotes"
        footer={<FooterSection />}
        mainLabel="Overview"
      >
        <MainSection />
      </Layout>
    </Paper>
  );
};

export default Page;
