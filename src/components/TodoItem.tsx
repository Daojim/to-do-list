import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-amber-300">
        <input type="checkbox" className="scale-125" />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}

export default TodoItem;
