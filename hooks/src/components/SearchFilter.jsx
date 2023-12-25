/*
In this exercise, you are tasked with creating a simple Search Filter component that allows users to filter a list of items based on their search input.

Expectations:

Create an input field for users to type in their search query

Display the list of items and filter them based on the user's search input

Use the useState hook to manage the search input state

*/
import React from "react";

const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

function SearchFilter() {
  return (
    <div>
      <input type="text" />
      <ul>{/* Render the filtered list of items here */}</ul>
    </div>
  );
}

export default SearchFilter;
