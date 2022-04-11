import React from "react";

import { x } from "@xstyled/emotion";

import {
  goldenRatioSectionSpacerPX,
  goldenRatioShortPX,
  pxH,
} from "@cv/views/DesignSystem";

import Section from "@cv/containers/Section";
import Record from "@cv/containers/facets/Record";
import TableLabeledList from "@cv/containers/facets/TableLabeledList";
import Topic from "@cv/containers/facets/Topic";

import Remark from "@cv/components/decorators/Remark";
import { LabeledListItemTopLevel } from "@cv/components/lists/LabeledListItem";
import Caption from "@cv/components/texts/Caption";
import Title from "@cv/components/texts/Title";

interface Main {
  /**
   * Primary column of the page-layout.
   */
  primaryColumn?: React.ReactNode;
  /**
   * Secondary column of the page-layout.
   */
  secondaryColumn?: React.ReactNode;
}

/**
 * CV Main Section: Contains Aside Section and Main Container
 */
const Main: React.FC<Main> = () => (
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
      <Section heading="Qualification">
        <Topic title="Software Engineering" />
        <Topic title="Product Architecture" />
      </Section>

      {/* Education */}
      <Section heading="Education">
        <Title subtitle="St. Petersburg Russia">GSOM</Title>
        <Caption double>
          2015 · Ranked #1 in Russia. Term of courses in finance & teaching
          programmatic marketing.
        </Caption>
        <LabeledListItemTopLevel label="Major">
          Information Systems
        </LabeledListItemTopLevel>
        <LabeledListItemTopLevel label="Focus" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
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
          This is a test to see if the line fits and correctly wraps to the next
          line.
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

      {/* END: Aside Container */}
    </x.div>
    {/* Right Side */}

    <x.div spaceY={pxH(14)}>
      {/* START: Experience / Main Container */}
      {/* FIXME: Safari Reader - When the main container is inside here, safari reader mode isn't recognized. */}
      <Section heading="Experience">
        <Record />
        <Title subtitle="Software Engineer" />
        <Caption>Since 2123 · Berlin, Germany</Caption>
        <Record />
        <Record />
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
    </x.div>
  </x.div>
);

export default Main;
