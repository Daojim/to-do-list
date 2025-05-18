interface DeleteToDoButtonProps {
  onDelete: (id: number) => void;
  id: number;
}

function DeleteToDoButton({ onDelete, id }: DeleteToDoButtonProps) {
  return (
    <button
      className="ml-auto bg-red-600 text-white"
      onClick={() => onDelete(id)}
    >
      X
    </button>
  );
}

export default DeleteToDoButton;
