import TodoItem from "./components/TodoItem";
import AddToDoForm from "./components/AddTodoForm";
import { dummyData } from "./data/todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(dummyData);

  //Function to handle a todo list being checked or not, takes in a number
  function handleToggle(id: number) {
    console.log("Toggling:", id);
    //My state updater
    setTodos(
      //.map() makes it a new array and loops every todo
      todos.map((todo) => {
        // checks if the todo matches the one that's clicked
        if (todo.id === id) {
          return {
            ...todo, //spread operator to copy all existing properties
            completed: !todo.completed, //changes the boolean to its opposite
          };
          //if it's not the id I wanted
        } else {
          return todo; // leave it unchanged
        }
      })
    );
  }

  function handleAdd(title: string) {
    const newToDo = {
      id: Date.now(), // Great way to give a new unique ID
      title, // inputted string is now the title of the to-do object
      completed: false,
    };

    setTodos([...todos, newToDo]); //Adds new to-do object to the end of the list
  }

  return (
    <>
      <main className="py-10 bg-red-50 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">To-do List</h1>
        <div className="max-w-lg mx-auto bg-red-200 rounded-md p-5">
          <div className="space-y-2">
            <AddToDoForm onAdd={handleAdd} />
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
