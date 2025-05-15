import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

function TodoItem({ todo, onToggle }: TodoItemProps) {
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
      </label>
    </div>
  );
}

export default TodoItem;
