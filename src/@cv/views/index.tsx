import React from "react";

import styled, { x } from "@xstyled/emotion";

import DesignSystem, {
  goldenRatioContentSpacer,
  goldenRatioElementSpacer,
  goldenRatioPageHeight,
  goldenRatioPageMargin,
  goldenRatioPageWidth,
  pxH,
  pxW,
} from "@cv/views/DesignSystem";

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
          <x.div
            bg="white"
            color="black"
            /* Page Dimensions (A4) */
            w={pxW(goldenRatioPageWidth)}
            h={pxH(goldenRatioPageHeight)}
            /* Trim (A4) */
            px={pxW(goldenRatioPageMargin)}
            pt={pxH(goldenRatioPageMargin)}
            pb={pxH(goldenRatioContentSpacer)}
            /* Box Model */
            display="flex"
            flexDirection="column"
            spaceY={pxH(goldenRatioElementSpacer)}
          >
            {/* START: CV Sections */}

            <Header />
            <MetaSection />
            <MainSection />

            {/* Footer */}
            <FooterSection />
            {/* END: Footer */}
            {/* END: CV Sections */}
          </x.div>
        </PageScale>
      </x.div>
    </DesignSystem>
  );
};

export default CV;
