import React from "react";
import "../styles/HomeState.css";
import Dashboard from "../layouts/Dashboard.jsx";

function HomeState() {
  return (
    <>
      <div className="menuState">
        <Dashboard />
      </div>
      <div className="stateBody">
        <h2>UseState Hook</h2>
        <p>
          Put your react state management skills to the test with 8 interactive
          exercises.
        </p>
        <p>
          React's useState hook, is a powerful tool that simplifies state
          management in functional components. In this article, we'll dive into
          8 interactive exercises that will help you gain a deeper understanding
          of React's useState and its practical applications.
        </p>
        <p>
          These exercises are designed to challenge your existing knowledge,
          reinforce your understanding, and elevate your skill set.
        </p>
        <p>
          By the end of this post, you'll be able to confidently use useState in
          your projects, optimize state management, and build more robust and
          maintainable React applications. So, grab some coffee or tea and let's
          get started!
        </p>
      </div>
      <div className="activity">
        <div className="work">
          <button>Counter</button>
          <button>Controlled Input Field</button>
          <button>Toggle Visibility</button>
          <button>Character Counter</button>
          <button>Todo List</button>
          <button>Color Switcher</button>
          <button>Search Filter</button>
          <button>Drag and Drop List</button>
        </div>
      </div>
    </>
  );
}
export default HomeState;
