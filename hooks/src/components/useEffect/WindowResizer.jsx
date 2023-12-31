/*
Create a WindowSize component that listens to the window's resize event and displays the current window size. Use the useEffect hook to add and remove the event listener on mount and unmount, respectively. This exercise will help you understand how to use the useEffect hook for managing side effects like event listeners and the importance of cleanup functions.
Expectations

- Listen to the window's resize event.

- Display the current window size.

- Add the event listener when the component mounts.

- Remove the event listener when the component unmounts.

Background

Using useEffect to manage side effects like event listeners is an essential skill for React developers. 
Event listeners are common in real-world applications, 
and this exercise will help you learn how to use useEffect for setting up and cleaning up event listeners in functional components.

*/
import React, { useState, useEffect } from "react";

const WindowSize = () => {
  // Add your state and useEffect logic here

  return <div>{/* Display the current window size here */}</div>;
};

export default WindowSize;
