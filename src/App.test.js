import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders app heading", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});
