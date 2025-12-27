import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nova tarefa" />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
