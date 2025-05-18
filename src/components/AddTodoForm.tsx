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
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="rounded-s-md grow border border-gray-400 bg-white p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you want to add?"
        />
        <button
          className="w-16 rounded-e-md text-amber-50 bg-blue-700  hover:bg-green-600"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddToDoForm;
