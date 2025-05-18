import { useState } from "react";

function AddToDoForm() {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //Prevents the browser from refreshing
  }

  return (
    <>
      {/* Create form to add a to-do */}
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddToDoForm;
