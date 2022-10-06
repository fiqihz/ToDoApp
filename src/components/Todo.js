import { Fragment, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [listTodo, setListTodo] = useState([]);

  const handleAddTodo = (data) => {
    if (data.trim().length !== 0) {
      setListTodo((prevData) => {
        const todoValue = [...prevData];
        todoValue.unshift({ todo: data, id: Date.now().toString() });
        return todoValue;
      });
    }
  };

  const handleDeleteTodo = (id) => {
    setListTodo((prevData) => {
      const delTodo = prevData.filter((data) => data.id !== id);
      return delTodo;
    });
  };

  return (
    <Fragment>
      <TodoForm onAddTodo={handleAddTodo} />
      {listTodo.length > 0 && (
        <TodoList listData={listTodo} onDeleteTodo={handleDeleteTodo} />
      )}
    </Fragment>
  );
};

export default Todo;
