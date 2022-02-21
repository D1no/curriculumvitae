import React from "react";

import { render, screen } from "@testing-library/react";

import App from ".";

test("Landing page has company name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hundertschaft/i);
  expect(linkElement).toBeInTheDocument();
});
