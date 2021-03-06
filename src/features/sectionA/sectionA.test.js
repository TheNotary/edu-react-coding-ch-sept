// Stuff that helps us test
import React from "react";
import { render, fireEvent } from "../../../tools/test-utils"; // We're using our own custom render function and not RTL's render our custom utils also re-export everything from RTL so we can import fireEvent and screen here as well
import "@testing-library/jest-dom/extend-expect";

// Stuff being tested
import SectionA, { sectionALogic } from "./SectionA";
import sectionAReducer from "./sectionASlice";
const rootReducer = { sectionA: sectionAReducer };

// Test the UI entirely
test("renders using redux with defaults and increment the count", () => {
  // Setup experiment
  const { getByTestId } = render(<SectionA />, {
    rootReducer: rootReducer,
  });

  // define lookups for an immutable world of pain :)
  const getNumberElement = () => getByTestId("number");
  const getLenElement = () => getByTestId("len");
  const getAnswerElement = () => getByTestId("answer");

  // Conduct experiment
  fireEvent.change(getNumberElement(), { target: { value: "10" } });
  fireEvent.change(getLenElement(), { target: { value: "3" } });

  // Assert hypothesis
  expect(getAnswerElement()).toHaveTextContent("[10,20,30]");
});

// TDD the function logic ;)
test("sectionALogic works good", () => {
  const answer = sectionALogic(10, 3);
  expect(answer).toEqual([10, 20, 30]);
});
