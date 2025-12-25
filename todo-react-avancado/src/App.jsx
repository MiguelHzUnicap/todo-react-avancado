
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <TodoProvider>
      <h1>Todo List Avançado</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
