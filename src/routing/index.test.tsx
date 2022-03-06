import React from "react";

import { render, screen } from "@testing-library/react";

import Routing from ".";

test("Landing page has company name", () => {
  render(<Routing />);
  const linkElement = screen.getByText(/Hundertschaft/i);
  expect(linkElement).toBeInTheDocument();
});
