import React from "react";

import Remark from "@cv/components/decorators/Remark";
import { LabeledListItemInline } from "@cv/components/lists/LabeledListItem";
import Caption from "@cv/components/texts/Caption";
import Title from "@cv/components/texts/Title";

interface IRecord {
  /**
   * Title of the record. Shows a dot if not specified.
   */
  title?: string;
}

const Record: React.FC<IRecord> = ({ title }) => {
  return (
    <>
      <Title subtitle="Software Engineer">{title}</Title>
      <Caption>Since 2123 · Berlin, Germany</Caption>
      <Remark
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum
            mauris non lorem vulputate, ac dictum dui commodo. Nullam ultrices
            suscipit justo, eu auris"
      >
        <LabeledListItemInline label="Solution & Technology" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </LabeledListItemInline>
      </Remark>
    </>
  );
};

export default Record;
