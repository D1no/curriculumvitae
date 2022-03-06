import styled from "@xstyled/emotion";

import { L } from "@ui/views/Layout/util";

const NavigationTrackLine = () => {
  const NavBarLine = styled.svg`
    fill: hs-gold;
    padding-bottom: 3;
  `;

  // In Rem
  const strokeWidthRem = 0.032 * 1;
  const trackPointSizeRem = strokeWidthRem * 2;

  const gridSize = 24;
  const sidePad = 1;

  const trackGap = 3;
  const trackGridPosition = 4;

  return (
    <L>
      <NavBarLine height="1rem" width="100%">
        <rect
          height={strokeWidthRem + "rem"}
          width={
            ((trackGridPosition - sidePad - trackGap / 2) / gridSize) * 100 +
            "%"
          }
          x={(sidePad / gridSize) * 100 + "%"}
          y="50%"
        />
        <circle
          cx={(trackGridPosition / gridSize) * 100 + "%"}
          cy="50%"
          r={trackPointSizeRem + "rem"}
        />
        <rect
          height={strokeWidthRem + "rem"}
          width={
            ((gridSize - (trackGridPosition + trackGap / 2) - sidePad) /
              gridSize) *
              100 +
            "%"
          }
          x={((trackGridPosition + trackGap / 2) / gridSize) * 100 + "%"}
          y="50%"
        />
      </NavBarLine>
    </L>
  );
};

export default NavigationTrackLine;
