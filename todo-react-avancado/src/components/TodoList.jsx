
import { useMemo } from "react";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, filter } = useTodo();

  const filteredTodos = useMemo(() => {
    if (filter === "done") return todos.filter(t => t.done);
    if (filter === "pending") return todos.filter(t => !t.done);
    return todos;
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
