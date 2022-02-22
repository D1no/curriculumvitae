// Lucide-Icons: https://lucide.dev/
import { Download } from "lucide-react";

import React from "react";
import { Outlet } from "react-router-dom";

import styled, { system, x } from "@xstyled/emotion";

import { ILayoutProps, L } from "containers/Layout/util";

import Navigation from "components/Navigation";

import { ReactComponent as PDFIcon } from "assets/icon/pdf.svg";

/**
 * Full screen layout container with a header, main and navigation section.
 * If child components are provided, those are rendered in the main section.
 * Otherwise the <Outlet /> of provided routes.
 */
const Layout: React.FC<ILayoutProps> = ({ debug = false, ...props }) => {
  const File = x.div;
  const FileName = x.h1;
  const FileIcon = styled(PDFIcon)`
    ${system}
  `;

  const Action = x.div;
  const ActionIcon = styled(Download)`
    ${system}
  `;
  const ActionLabel = x.span;

  return (
    <>
      <x.div display="flex" flexDirection="column">
        {/* Header */}
        <L debug={debug}>
          <x.header
            pt={3}
            pb={4}
            px={3}
            position="absolute"
            left={0}
            right={0}
            backgroundImage="gradient-to-b"
            gradientFrom="doc-overlay"
            display="flex"
            justifyContent="space-between"
          >
            {/* Left: File Info */}
            <File display="flex" overflow="hidden" flexGrow={1} mr={4}>
              <L debug={debug}>
                <FileIcon h={5} w={5} my="auto" mx={3} />
              </L>
              <L debug={debug}>
                <FileName
                  lineHeight={10}
                  fontSize="sm"
                  my="auto"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  cv_dino_scheidt.pdf
                </FileName>
              </L>
            </File>
            {/* Right: Action */}
            <L debug={debug}>
              <Action alignSelf="center">
                <L debug={debug}>
                  <x.div
                    display="flex"
                    px={3}
                    py={2}
                    borderRadius
                    bg="doc-primary"
                  >
                    <ActionIcon
                      h="1.125rem"
                      w="1.125rem"
                      size="1.125rem"
                      mr={2}
                      my="auto"
                    />
                    <ActionLabel lineHeight={5} fontSize="sm" pr={1}>
                      Download
                    </ActionLabel>
                  </x.div>
                </L>
              </Action>
            </L>
          </x.header>
        </L>

        {/* Main Content (Outlet) */}
        <L debug={debug}>
          <x.main flexGrow={1} p={2} mt={14}>
            {props.children ? props.children : <Outlet />}
          </x.main>
        </L>
      </x.div>
    </>
  );
};

export default Layout;
