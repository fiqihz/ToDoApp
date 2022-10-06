import { useState, useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const todoRef = useRef(null);

  const handleChangeTodo = (event) => {
    setEnteredTodo(event.target.value);
  };

  const handleSubmitTodo = (event) => {
    event.preventDefault();
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
    todoRef.current.focus();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmitTodo}>
        <label>Input Todo</label>
        <input
          type="text"
          value={enteredTodo}
          onChange={handleChangeTodo}
          ref={todoRef}
        />
        <button type="submit">Add</button>
      </form>
    </Card>
  );
};

export default TodoForm;
