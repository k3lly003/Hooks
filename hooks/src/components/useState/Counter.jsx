/*
In this exercise, you’re tasked with creating a simple counter component that increments a number every time a button is clicked.

Expectations:

-Every time the button is clicked, the number should increment by 1

-Display the current number state in the text element
*/
import React from "react";

function Counter() {
  return (
    <>
      <div>
        <button>Increment</button>
        <p>Count: </p>
      </div>
    </>
  );
}

export default Counter;
