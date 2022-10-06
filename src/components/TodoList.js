import Card from "../UI/Card/Card";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <Card className={classes.list}>
      <p>{props.listData}</p>
      <button>Delete</button>
    </Card>
  );
};

export default TodoList;
