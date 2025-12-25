
import { useTodo } from "../context/TodoContext";

function TodoFilter() {
  const { setFilter } = useTodo();

  return (
    <div>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("done")}>Concluídas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>
    </div>
  );
}

export default TodoFilter;
