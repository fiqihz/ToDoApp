import Card from "../UI/Card/Card";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  return (
    <Card className={classes.input}>
      <form>
        <label>Input Todo</label>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </Card>
  );
};

export default TodoForm;
