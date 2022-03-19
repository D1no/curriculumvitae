import React from "react";

import Layout from "@cv/containers/Layout";
import Header from "@cv/containers/Layout/sections/Header";

import Footer from "../Layout/sections/Footer";
import Main from "../Layout/sections/Main";
import Meta from "../Layout/sections/Meta";
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
        subHeader={<Meta />}
        footerLabel="Export & Footnotes"
        footer={<Footer />}
        mainLabel="Overview"
      >
        <Main />
      </Layout>
    </Paper>
  );
};

export default Page;
