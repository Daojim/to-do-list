import React, { useState } from "react";

interface AddToDoFormProps {
  onAdd: (title: string) => void;
}

function AddToDoForm({ onAdd }: AddToDoFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); //Prevents the browser from refreshing
    if (!text.trim()) return; // Prevents adding a blank item
    onAdd(text);
    setText("");
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
