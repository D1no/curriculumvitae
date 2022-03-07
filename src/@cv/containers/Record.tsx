import React from "react";

import Caption from "@cv/components/Caption";
import ElementTitle from "@cv/components/ElementTitle";
import { RemarkLabeledListItem } from "@cv/components/LabeledListItem";
import Remark from "@cv/components/Remark";

const Record: React.FC<{}> = () => {
  return (
    <>
      <ElementTitle subtitle="Software Engineer">Example Inc.</ElementTitle>
      <Caption>Since 2123 · Berlin, Germany</Caption>
      <Remark
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum
            mauris non lorem vulputate, ac dictum dui commodo. Nullam ultrices
            suscipit justo, eu auris"
      >
        <RemarkLabeledListItem label="Solution & Technology" double>
          This is a test to see if the line fits and correctly wraps to the next
          line.
        </RemarkLabeledListItem>
      </Remark>
    </>
  );
};

export default Record;
