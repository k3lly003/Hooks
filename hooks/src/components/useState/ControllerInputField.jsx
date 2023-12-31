/*
Create an input field component that allows a user to type in text and displays the text in real-time.

-Every time the user types something in the input field, the text should update in the text element

-You should use the useState hook to keep track of the text state
*/
import React from "react";

function ControlerInputField() {
  return (
    <>
      <div>
        <input type="text" />
        <p>Input text: TODO</p>
      </div>
    </>
  );
}

export default ControlerInputField;
