import { Trash2 } from "lucide-react";

interface DeleteToDoButtonProps {
  onDelete: (id: number) => void;
  id: number;
}

function DeleteToDoButton({ onDelete, id }: DeleteToDoButtonProps) {
  return (
    <button
      className="ml-auto bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-md"
      onClick={() => onDelete(id)}
    >
      <Trash2 size={16} className="text-white" />
    </button>
  );
}

export default DeleteToDoButton;
