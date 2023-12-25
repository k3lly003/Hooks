/*
In this exercise, you are tasked with creating a simple Drag and Drop List component that allows users to reorder a list of items by dragging and dropping them. The Drag and Drop List should have the following features:

Display the list of items

Allow users to drag and drop items to reorder the list

Use the useState hook to manage the list state
*/
import React from "react";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function DragDropList() {
  return (
    <div>
      <ul>{/* Render the list of items here */}</ul>
    </div>
  );
}

export default DragDropList;
