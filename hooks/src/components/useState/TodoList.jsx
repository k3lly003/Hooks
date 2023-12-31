/*
In this exercise, you are tasked with creating a simple Todo List component that allows users to
 add new items to the list and delete items once they are completed. 

The Todo List should have the following features:

-An input field for adding new todo items
-A button to submit the new todo item
-Display the list of todo items
-A delete button next to each todo item to remove it from the list

Use the useState hook to manage the todo list state
*/
import React from "react";

function TodoList() {
    return (
        <div>
          <input type="text" />
          <button>Add Todo</button>
          <ul>
            {/* Render the list of todo items here */}
          </ul>
        </div>
      );
}

export default TodoList;
