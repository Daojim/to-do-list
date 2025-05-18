interface DeleteToDoButtonProps {
  onDelete: (id: number) => void;
  id: number;
}

function DeleteToDoButton({ onDelete, id }: DeleteToDoButtonProps) {
  return <button onClick={() => onDelete(id)}>X</button>;
}

export default DeleteToDoButton;
