import React from "react";

import Layout from "@cv/containers/Layout";
import Header from "@cv/containers/Layout/areas/Header";

import Remark from "@cv/components/decorators/Remark";
import { LabeledListItemTopLevel } from "@cv/components/lists/LabeledListItem";
import Caption from "@cv/components/texts/Caption";
import Title from "@cv/components/texts/Title";

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
import Section from "../Section";
import Record from "../facets/Record";
import TableLabeledList from "../facets/TableLabeledList";
import Topic from "../facets/Topic";
import Paper from "./paper";

interface Page extends Paper {
  // TODO Data Interface
}

/**
 * Renders a page according to size scaled by the design system.
 */
const Page: React.FC<Page> = ({ size, overwriteCssSpec }) => {
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
      >
        <Main
          aside={
            <>
              {/* Qualification */}
              <Section heading="Qualification">
                <Topic title="Software Engineering" />
                <Topic title="Product Architecture" />
              </Section>

              {/* Education */}
              <Section heading="Education">
                <Title subtitle="St. Petersburg Russia">GSOM</Title>
                <Caption double>
                  2015 · Ranked #1 in Russia. Term of courses in finance &
                  teaching programmatic marketing.
                </Caption>
                <LabeledListItemTopLevel label="Major">
                  Information Systems
                </LabeledListItemTopLevel>
                <LabeledListItemTopLevel label="Focus" double>
                  This is a test to see if the line fits and correctly wraps to
                  the next line.
                </LabeledListItemTopLevel>
                <LabeledListItemTopLevel label="GPA">
                  1.6 (scale 1 to 5; 1.0 best); top 11%
                </LabeledListItemTopLevel>
                <Remark
                  small
                  body="Patroned to a scholarship by the board in the field of Digital Transformation."
                />
                <Caption>Since 2123 · Berlin, Germany</Caption>
                <LabeledListItemTopLevel label="AI / ML Field" double>
                  This is a test to see if the line fits and correctly wraps to
                  the next line.
                </LabeledListItemTopLevel>
                <Remark
                  small
                  body="Patroned to a scholarship by the board in the field of Digital Transformation."
                />
                <Caption>Since 2123 · Berlin, Germany</Caption>
                <Remark
                  small
                  body="Patroned to a scholarship by the board in the field of Digital Transformation."
                />
              </Section>
              {/* END: Education */}
            </>
          }
        >
          <Section heading="Experience">
            <Record title="Example Inc." />
            <Title subtitle="Software Engineer" />
            <Caption>Since 2123 · Berlin, Germany</Caption>
            <Record />
            <Record title="Another Company" />
          </Section>
          {/* END: Experience / Main Container */}

          {/* START: Honours & Media  */}
          <Section heading="Honours & Media">
            <TableLabeledList
              columnNames={["Data", "Format", "Topic / Remark"]}
              rows={[
                {
                  label1: "2018/02",
                  label2: "Speaker",
                  subject: "Bridging Augmented Reality & React Native",
                },
                {
                  label1: "2018/11",
                  label2: "Article",
                  subject: "Was erwartet der Kunde im Omnichannel?",
                },
                {
                  label1: "2018/04",
                  label2: "Speaker",
                  subject: "ReactJS in the Enterprise",
                  remark: "Atlasian Inc. / Mind Space Berlin",
                },
                {
                  label1: "2018/02",
                  label2: "Speaker",
                  subject: "Bridging Augmented Reality & React Native",
                  remark: "React Day Berlin",
                },
                {
                  label1: "2018/02",
                  label2: "Speaker",
                  subject: "Bridging Augmented Reality & React Native",
                  remark: "React Day Berlin",
                },
              ]}
            />
            {/* END: Labeled List Table */}
          </Section>
          {/* END: Honours & Media  */}
        </Main>
      </Layout>
    </Paper>
  );
};

export default Page;
