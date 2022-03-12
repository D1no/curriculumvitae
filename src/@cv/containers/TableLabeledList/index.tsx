import React from "react";

import { x } from "@xstyled/emotion";

import {
  goldenRatioGridStep,
  goldenRatioLongSection,
  pxB,
  pxH,
  pxW,
} from "@cv/views/DesignSystem";

type tableLabeledRow = {
  label1?: string;
  label2?: string;
  subject?: string;
  remark?: string;
  detailed?: boolean;
};

/**
 * CV Element: Table as labeled list.
 */
const TableLabeledList: React.FC<{
  showHeader?: boolean;
  columnNames?: [string, string, string];
  rows?: tableLabeledRow[];
}> = ({
  showHeader = false,
  columnNames = ["column1", "column2", "column3"],
  rows = [
    {
      label1: "label1",
      label2: "label2",
      subject: "subject",
    },
  ],
}) => {
  // Column names
  const [column1, column2, column3] = columnNames;

  // Sizing Constants
  const widthFirstLabel = 5.5 * goldenRatioGridStep; // 44
  const widthSecondLabel = 6 * goldenRatioGridStep; // 48
  const widthContentColumn =
    goldenRatioLongSection - widthFirstLabel - widthSecondLabel;

  const label1Indent = 6;
  const label2Indent = 2;

  /**
   * Row for a three column table. I.e. time, type, subject with an option (detailed = true) to show
   * an additional 0.5 line remark under the content of the last column (i.e. remark under subject). */
  const LabeledRow: React.FC<tableLabeledRow> = ({
    detailed,
    label1 = "label1",
    label2 = "label2",
    subject = "subject",
    remark,
    // <- Readability: Destructuring done here to get properties directly. Potentially confusing for beginners.
  }) => {
    // Automatically show remark if no instruction given and remark available
    if (detailed === undefined && remark !== undefined) {
      detailed = true;
    }

    /**
     *  Label style used in first and second column. */
    const Label: React.FC<{}> = ({ children }) => {
      return (
        <x.span
          pt={pxH(2)}
          fontSize={pxB(8)}
          lineHeight={pxB(8)}
          fontWeight="bolder"
        >
          {children}
        </x.span>
      );
    };

    /**
     *  Third column Subject content */
    const SubjectLine: React.FC<{}> = ({ children }) => {
      return <x.span>{children}</x.span>;
    };

    /**
     *  Second line in smaller font under Subject */
    const RemarkLine: React.FC<{ show?: boolean }> = ({
      children,
      show = detailed,
    }) => {
      if (!show) return <></>;

      return (
        <>
          <x.span
            fontStyle="italic"
            color="cv-muted"
            fontSize={pxB(8)}
            lineHeight={pxB(8)}
            mt={pxH(1)}
            display="block"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {children}
          </x.span>
        </>
      );
    };

    return (
      <x.tr
        h={pxH(detailed ? 21 : 14)}
        maxHeight={pxH(detailed ? 21 : 14)}
        display="block"
        pt={pxH(1)}
        pb={pxH(1)}
        whiteSpace="nowrap"
        verticalAlign="baseline"
      >
        <x.td
          w={pxW(widthFirstLabel)}
          maxWidth={pxW(widthFirstLabel)}
          pl={pxW(label1Indent)}
          pr={pxW(2)}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          <Label>{label1}</Label>
        </x.td>
        <x.td
          w={pxW(widthSecondLabel)}
          maxWidth={pxW(widthSecondLabel)}
          pr={pxW(label2Indent)}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          <Label>{label2}</Label>
        </x.td>
        <x.td
          w={pxW(widthContentColumn)}
          maxWidth={pxW(widthContentColumn)}
          fontSize={pxB(10)}
          lineHeight={pxB(detailed ? 10 : 12)}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          <SubjectLine>{subject}</SubjectLine>
          <RemarkLine>{remark}</RemarkLine>
        </x.td>
      </x.tr>
    );
  };

  return (
    <x.table
      tableLayout="auto"
      fontSize={pxB(10)}
      lineHeight={pxB(10)}
      textAlign="left"
      verticalAlign="top"
      border="none"
      cellSpacing="0"
      cellPadding="0"
      textOverflow="ellipsis"
      overflow="hidden"
    >
      {/* TODO: Continues here. Box not modeled yet. */}
      <thead>
        <x.tr
          display={showHeader ? "block" : "none"}
          // Style
          fontSize={pxB(8)}
          lineHeight={pxB(10)}
          fontStyle="italic"
          // Box Model
          h={pxH(12)}
          borderBottom="1px solid"
          borderColor="cv-decor"
          maxHeight={pxH(12)}
          mb={pxH(1)}
          whiteSpace="nowrap"
          verticalAlign="baseline"
        >
          <x.th
            fontWeight="normal"
            color="cv-muted"
            // Box Model
            w={pxW(widthFirstLabel)}
            maxWidth={pxW(widthFirstLabel)}
            pl={pxW(label1Indent)}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {column1}
          </x.th>
          <x.th
            fontWeight="normal"
            color="cv-muted"
            // Box Model
            w={pxW(widthSecondLabel)}
            maxWidth={pxW(widthSecondLabel)}
            pr={pxW(label2Indent)}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {column2}
          </x.th>
          <x.th
            fontWeight="normal"
            color="cv-muted"
            // Box Model
            w={pxW(widthContentColumn)}
            maxWidth={pxW(widthContentColumn)}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {column3}
          </x.th>
        </x.tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <LabeledRow
            key={i}
            label1={row.label1}
            label2={row.label2}
            subject={row.subject}
            remark={row.remark}
            detailed={row.detailed}
          />
        ))}
      </tbody>
    </x.table>
  );
};

export default TableLabeledList;
