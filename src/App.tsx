import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";

function App() {
  return (
    <>
      <main className="py-10 bg-red-50 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">To-do List</h1>
        <div className="max-w-lg mx-auto bg-red-200 rounded-md p-5">
          <div className="space-y-2">
            {dummyData.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
