/*
In this exercise, you are tasked with creating a simple Color Switcher component that allows users to change the background color of a div by selecting a color from a dropdown list.

Expectations:

Create a dropdown list with a few color options (e.g., red, blue, green, yellow)

When a color is selected from the dropdown, the background color of the div should change to the selected color

Use the useState hook to manage the background color state
*/
import React from "react";

function ColorSwitcher() {
  return (
    <div>
      <select>{/* Render the color options here */}</select>
      <div>{/* Change the background color of this div */}</div>
    </div>
  );
}

export default ColorSwitcher;
