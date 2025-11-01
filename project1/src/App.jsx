import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  function formHandled(e) {
    e.preventDefault();
    alert("Form Submited");
  }
  return (
    <div>
      <form onSubmit={formHandled}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Search Here..."
        />
        <button>Click Me</button>
      </form>
    </div>
  );
};

export default App;
