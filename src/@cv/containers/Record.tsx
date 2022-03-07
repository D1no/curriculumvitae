import React from "react";

import ElementCaption from "@cv/components/ElementCaption";
import ElementRemark from "@cv/components/ElementRemark";
import ElementTitle from "@cv/components/ElementTitle";
import { RemarkLabeledListItem } from "@cv/components/LabeledListItem";

const Record: React.FC<{}> = () => {
  return (
    <>
      <ElementTitle subtitle="Software Engineer">Example Inc.</ElementTitle>
      <ElementCaption>Since 2123 · Berlin, Germany</ElementCaption>
      <ElementRemark
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum
            mauris non lorem vulputate, ac dictum dui commodo. Nullam ultrices
            suscipit justo, eu auris"
      >
        <RemarkLabeledListItem label="Solution & Technology" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </RemarkLabeledListItem>
      </ElementRemark>
    </>
  );
};

export default Record;
