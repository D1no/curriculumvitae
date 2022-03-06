import { Circle, LucideProps } from "lucide-react";

import React from "react";

import { x } from "@xstyled/emotion";

import { ILayoutProps, L } from "@ui/views/Layout/util";

export type NavigationItemProps = typeof x.div.defaultProps & {
  /**
   * Sets a random background color of layout elements.
   */
  debug?: ILayoutProps["debug"];
  /**
   * Size of the SVG Icon. Is passed to SVG Icon.
   */
  size?: LucideProps["size"];
  /**
   * Stroke Width of the SVG Icon. Is passed to SVG Icon.
   */
  strokeWidth?: LucideProps["strokeWidth"];
  /**
   * SVG Element. Default: Feather Icon Circle
   */
  svgIcon?: React.FunctionComponentElement<LucideProps>;
};

/**
 * Menu Item for the (bottom) Navigation
 */
const NavigationItem = ({
  debug = false,
  size = "1.5rem",
  // Leads to 0.515px on 16px = 1 rem devices. Meaning, if the user increases their default font size
  // the line thickness gets proportionally wider
  strokeWidth = "0.032rem",
  svgIcon = <Circle />,
  ...props
}: NavigationItemProps) => {
  return (
    <L debug={debug}>
      <x.div {...props}>
        <L debug={debug}>
          {React.cloneElement(svgIcon, {
            size,
            strokeWidth,
            style: { margin: "auto" },
          })}
        </L>
        <x.p fontWeight="light" mt={2} text="xs">
          {props.children ? props.children : "Menu Item"}
        </x.p>
      </x.div>
    </L>
  );
};

export default NavigationItem;
