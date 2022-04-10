import React from "react";

import Layout from "@cv/containers/Layout";
import Header from "@cv/containers/Layout/areas/Header";

import accentureLogo from "@cv/assets/orgLogo/accenture.png";
import dexisLogo from "@cv/assets/orgLogo/dexis.png";
import everphoneLogo from "@cv/assets/orgLogo/everphone.png";
import flLogo from "@cv/assets/orgLogo/fl.png";
import googleLogo from "@cv/assets/orgLogo/google.png";
import shopkickLogo from "@cv/assets/orgLogo/shopkick.png";
import siemensLogo from "@cv/assets/orgLogo/siemens.png";
import solyticLogo from "@cv/assets/orgLogo/solytic.png";

import Footer from "../Layout/areas/Footer";
import Main from "../Layout/areas/Main";
import Meta from "../Layout/areas/Meta";
import Paper from "./paper";

interface Page extends Paper {
  /**
   * Main Section
   */
  children?: React.ReactNode;
}

/**
 * Renders a page according to size scaled by the design system.
 */
const Page: React.FC<Page> = ({ size, overwriteCssSpec, ...props }) => {
  return (
    <Paper size={size} overwriteCssSpec={overwriteCssSpec}>
      <Layout
        headerLabel="Profile"
        header={<Header />}
        subHeaderLabel="Keywords & Contact"
        subHeader={
          <Meta
            orgLogos={[
              { imageSrc: googleLogo, orgName: "Google" },
              { imageSrc: accentureLogo, orgName: "Accenture" },
              { imageSrc: dexisLogo, orgName: "Dexis" },
              { imageSrc: siemensLogo, orgName: "Siemens" },
              { imageSrc: flLogo, orgName: "FoundersLane" },
              { imageSrc: everphoneLogo, orgName: "Everphone" },
              { imageSrc: solyticLogo, orgName: "Solytic" },
              { imageSrc: shopkickLogo, orgName: "Shopkick" },
            ]}
            contact={{
              phone: "+49123456789",
              email: "sample@email.example",
              locationShort: "City, Country (GMT+1)",
            }}
            web={[
              {
                shortName: "LinkedIn",
                linkSrc: "#",
              },
              {
                shortName: "GitHub",
                linkSrc: "#",
              },
              {
                shortName: "Web",
                linkSrc: "#",
              },
            ]}
          />
        }
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
