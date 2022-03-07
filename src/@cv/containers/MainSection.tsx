import React from "react";

import Record from "./Record";
import TableLabeledList from "./TableLabeledList";
import Topic from "./Topic";

import { x } from "@xstyled/emotion";

import {
  goldenRatioSectionSpacerPX,
  goldenRatioShortPX,
  pxH,
} from "@cv/views/DesignSystem";

import Caption from "@cv/components/Caption";
import ElementTitle from "@cv/components/ElementTitle";
import { TopicLabeledListItem } from "@cv/components/LabeledListItem";
import Remark from "@cv/components/Remark";
import SectionHeader from "@cv/components/SectionHeader";

/**
 * CV Main Section: Contains Aside Section and Main Container
 */
const MainSection = () => (
  <x.div
    display="flex"
    flexDirection="row"
    alignSelf="stretch"
    spaceX={goldenRatioSectionSpacerPX}
    justifyContent="center"
    /* Debug */
    /* bg="yellow-100" */
  >
    <x.div
      w={goldenRatioShortPX}
      flex="none"
      spaceY={pxH(14)}
      /* Debug */
      /* bg="green-100" */
    >
      {/* START: Aside Container */}

      {/* Qualification */}
      <x.section>
        <SectionHeader>Qualification</SectionHeader>
        <Topic title="Software Engineering" />
        <Topic title="Product Architecture" />
      </x.section>

      {/* Education */}
      <x.section>
        <SectionHeader>Education</SectionHeader>
        <ElementTitle subtitle="St. Petersburg Russia">GSOM</ElementTitle>
        <Caption double>
          2015 · Ranked #1 in Russia. Term of courses in finance & teaching
          programmatic marketing.
        </Caption>
        <TopicLabeledListItem label="Major">
          Information Systems
        </TopicLabeledListItem>
        <TopicLabeledListItem label="Focus" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </TopicLabeledListItem>
        <TopicLabeledListItem label="GPA">
          1.6 (scale 1 to 5; 1.0 best); top 11%
        </TopicLabeledListItem>
        <Remark
          small
          body="Patroned to a scholarship by the board in the field of Digital Transformation."
        />
        <Caption>Since 2123 · Berlin, Germany</Caption>
        <TopicLabeledListItem label="AI / ML Field" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </TopicLabeledListItem>
        <Remark
          small
          body="Patroned to a scholarship by the board in the field of Digital Transformation."
        />
        <Caption>Since 2123 · Berlin, Germany</Caption>
        <Remark
          small
          body="Patroned to a scholarship by the board in the field of Digital Transformation."
        />
      </x.section>
      {/* END: Education */}

      {/* END: Aside Container */}
    </x.div>
    {/* Right Side */}

    <x.div spaceY={pxH(14)}>
      {/* START: Experience / Main Container */}
      {/* FIXME: Safari Reader - When the main container is inside here, safari reader mode isn't recognized. */}
      <x.main
      /* Debug */
      /* bg="blue-100" */
      >
        <SectionHeader>Experience</SectionHeader>
        <Record />
        <ElementTitle subtitle="Software Engineer" />
        <Caption>Since 2123 · Berlin, Germany</Caption>
        <Record />
        <Record />
      </x.main>
      {/* END: Experience / Main Container */}

      {/* START: Honours & Media  */}
      <x.section

      /* Debug */
      /* bg="blue-100" */
      >
        <SectionHeader>Honours & Media</SectionHeader>
        {/* START: Labeled List Table */}
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
      </x.section>
      {/* END: Honours & Media  */}
    </x.div>
  </x.div>
);

export default MainSection;
