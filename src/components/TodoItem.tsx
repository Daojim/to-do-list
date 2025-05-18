//Importing the interface type that I created
import type { Todo } from "../types/todo";
import DeleteToDoButton from "./DeleteToDoButton";

//Defining the properties for this component
interface TodoItemProps {
  todo: Todo; //Object for this individual to-do
  onToggle: (id: number) => void;
  onDelete: (id: number) => void; //Function from App.tsx that takes in id and returns nothing
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-amber-300">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
        <DeleteToDoButton onDelete={onDelete} id={todo.id} />
      </label>
    </div>
  );
}

export default TodoItem;
