import React from "react";

import styled, { x } from "@xstyled/emotion";

import DesignSystem from "@cv/views/DesignSystem";
import {
  goldenRatioContentSpacer,
  goldenRatioPageHeight,
  goldenRatioPageMargin,
  goldenRatioPageWidth,
  pxH,
  pxW,
} from "@cv/views/DesignSystem";

import Layout from "@cv/containers/Layout";
import Page from "@cv/containers/Page";

/**
 * Animation for responsiveness.
 */
const PageScale = styled(x.div)`
  transition: all 0.3s ease-in-out;
`;

interface ICVProps {}

const CV: React.FC<ICVProps> = (props) => {
  return (
    <DesignSystem>
      <x.div boxShadow="page" display="flex" justifyContent="center">
        {/* TODO: Add proper scaling logic here */}
        <PageScale
          transform
          transformOrigin={
            // TODO: Scaling in dev shouldn't be different. -> Storybook
            process.env.NODE_ENV === "development" ? "75% 0%" : "50% 0%"
          }
          h="0"
          /* TODO: Discriminate between iphone mini and iphone max style phones. */
          scale={{ _: "0.45", sm: "0.75", md: "0.9", lg: "1", xl: "1.4" }}
        >
          <Page>
            <Layout />
          </Page>
        </PageScale>
      </x.div>
    </DesignSystem>
  );
};

export default CV;
