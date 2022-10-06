import Card from "../UI/Card/Card";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const handleDeleteTodo = (id) => {
    props.onDeleteTodo(id);
  };

  return (
    <Card className={classes.list}>
      {props.listData.map((data) => (
        <p key={data.id} onClick={handleDeleteTodo.bind(this, data.id)}>
          {data.todo}
        </p>
      ))}
    </Card>
  );
};

export default TodoList;
