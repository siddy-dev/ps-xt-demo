import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders try from there text for 404", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});
