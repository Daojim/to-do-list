import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function handleToggle(id: number) {
    console.log("Toggling:", id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <>
      <main className="py-10 bg-red-50 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">To-do List</h1>
        <div className="max-w-lg mx-auto bg-red-200 rounded-md p-5">
          <div className="space-y-2">
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
