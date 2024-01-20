import React from "react";
import Dashboard from "../layouts/Dashboard.jsx";

function HomeEffect() {
  return (
    <>
      <div className="menuEffect">
        <Dashboard />
      </div>
      <div className="container">
        <h2>UseState Hook</h2>
        <p>
          Master the useEffect hook in React with interactive exercises,
          covering scenarios like data fetching, input validation, and more, to
          enhance your functional components' performance and maintainability.
        </p>
        <p>
          React hooks are a powerful feature that allows you to use state and
          lifecycle methods in functional components. Among the various hooks,
          the useEffect hook plays a crucial role in managing side effects in
          your application. Side effects can include data fetching,
          subscriptions, or manually changing the DOM – tasks that are usually
          performed outside the component but are necessary for its proper
          functioning.
        </p>
        <p>
          In this blog post, we'll dive into the useEffect hook, its usage
          patterns, and how it can be used to handle various scenarios like data
          fetching, input validation, and more. To help you grasp these
          concepts, we've prepared interactive exercises that will guide you
          through the process of building components using the useEffect hook.
        </p>
        <p>
          In the exercises, you will learn how to: - Perform data fetching using
          useEffect and display the fetched data in your component. - Create a
          timer component that updates the displayed time every second using
          useEffect. - Build a form input validation component that validates
          user input and shows error messages using useEffect. - Develop a
          component that listens to the window's resize event and displays the
          current window size using useEffect.
        </p>
      </div>
      <div className="activity">
        <div className="work">
          <button>Data Fetching using useEffect</button>
          <button>Countdown Timer with useEffect</button>
          <button>Window Resize Listener using useEffect</button>
          <button>Form Input Validation with useEffect</button>
        </div>
      </div>
    </>
  );
}

export default HomeEffect;
