import { Fragment, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [listTodo, setListTodo] = useState([
    {
      id: "l1",
      todo: "Tidur",
    },
    {
      id: "l2",
      todo: "Bobo",
    },
  ]);

  return (
    <Fragment>
      <TodoForm />
      {listTodo.map((data) => (
        <div key={data.id}>
          <TodoList listData={data.todo} />
        </div>
      ))}
    </Fragment>
  );
};

export default Todo;
