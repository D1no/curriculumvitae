import React from "react";

import { LabeledListItemTopLevel } from "@cv/components/list/LabeledListItem";
import Body from "@cv/components/text/Body";
import Title from "@cv/components/text/Title";

/**
 * CV Container: Topic
 */
const Topic: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Body>
        Contributor of TypeScript to React Static (+5k GitHub Stars). Once
        created a react mobile framework that server side renders for a
        financial institution. Developing in react native by bridging iOS and
        Android with detail to CI, gdc efforts & teaching.
      </Body>
      <LabeledListItemTopLevel label="React Native" double>
        This is a test to see if the line fits and correctly wraps to the next
        line.
      </LabeledListItemTopLevel>
    </>
  );
};

export default Topic;
