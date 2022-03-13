import React from "react";

export interface LayoutProps {
  /**
   * If true, shows a background color for <L> wrapped layout areas.
   */
  debug?: boolean;
}

/**
 * Adds a random color background to the child element if passed "debug"
 */
export const L = ({ debug = false, ...props }) => {
  if (debug) {
    // Generating a random Background Color
    const debugStyle = {
      backgroundColor: "hsl(" + Math.random() * 360 + ", 80%, 80%)",
    };

    // Overwrite the background style of the child component (merging styles)
    return React.cloneElement(props.children, {
      style: { ...props.children.props.style, ...debugStyle },
    });
  } else {
    return props.children;
  }
};
