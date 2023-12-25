import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Input text: {text}</p>
    </div>
  );
}

export default InputField;
