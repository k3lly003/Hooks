import React from "react";
import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <div>
        <button onClick={handleToggleVisibility}>Show/Hide Text</button>
        {isVisible && <p>Toggle me!</p>}
      </div>
    </>
  );
}

export default ToggleVisibility;
