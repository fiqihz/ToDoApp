import Card from "../UI/Card/Card";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  return (
    <Card className={classes.form}>
      <label>Input Todo</label>
      <input type="text" />
      <button>Add</button>
    </Card>
  );
};

export default TodoForm;
