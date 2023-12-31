/*
Prompt

Create a ValidatedInput component that validates user input and shows an error message if the input is invalid. Use the useEffect hook to perform validation whenever the input value changes, simulating componentDidUpdate behavior. This exercise will help you understand how to use the useEffect hook for performing validation based on changes in state and the importance of the dependency array.
Expectations

- Validate user input based on a provided validation function.

- Display an error message if the input is invalid.

- Perform validation whenever the input value changes.

Background

Using useEffect to manage side effects like input validation is an essential skill for React developers. Validating user input is crucial for ensuring data quality and security in real-world applications, and this exercise will help you learn how to use useEffect for input validation in functional components.
*/
import React, { useState, useEffect } from "react";

const ValidatedInput = ({ validationFunction, errorMessage }) => {
  // Add your state and useEffect logic here

  return (
    <div>
      {/* Create the input field and display the error message if needed */}
    </div>
  );
};

export default ValidatedInput;
