/*
In this exercise, you're tasked with creating a component that toggles the visibility of a piece of text when a button is clicked. 

Expectations:

Initially, the text should be hidden

When the button is clicked, the text should become visible if it was hidden, and hidden if it was visible

Use the useState hook to manage the visibility state
*/
import React from "react";

function ToggleVisibility() {
  return (
    <>
      <div>
        <button>Show/Hide Text</button>
        <p>Toggle me!</p>
      </div>
    </>
  );
}

export default ToggleVisibility;
