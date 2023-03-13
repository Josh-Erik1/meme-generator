import React from "react";
import { Todo } from "./Model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FunctionComponent = () => {
  return <div>TodoList</div>;
};

export default TodoList;
