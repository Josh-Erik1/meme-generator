import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/Model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo)
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo("");
  };

  return (
    <div
      className="bg-blue-600 flex justify-center items-center flex-col
    "
    >
      <span className="font-thin font-libre text-white text-3xl z-10 capitalize p-4">
        TaskiFy
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
