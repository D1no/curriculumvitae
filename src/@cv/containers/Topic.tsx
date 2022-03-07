import React from "react";

import ElementBody from "@cv/components/ElementBody";
import ElementTitle from "@cv/components/ElementTitle";
import { TopicLabeledListItem } from "@cv/components/LabeledListItem";

/**
 * CV Container: Topic
 */
const Topic: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <ElementTitle>{title}</ElementTitle>
      <ElementBody>
        Contributor of TypeScript to React Static (+5k GitHub Stars). Once
        created a react mobile framework that server side renders for a
        financial institution. Developing in react native by bridging iOS and
        Android with detail to CI, gdc efforts & teaching.
      </ElementBody>
      <TopicLabeledListItem label="React Native" double>
        This is a test to see if the line fits and correctly wraps to the next
        line.
      </TopicLabeledListItem>
    </>
  );
};

export default Topic;
