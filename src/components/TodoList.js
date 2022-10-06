import Card from "../UI/Card/Card";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <Card className={classes.list}>
      {props.listData.map((data) => (
        <ul>
          <li>{data.todo}</li>
          <hr />
        </ul>
      ))}
    </Card>
  );
};

export default TodoList;
