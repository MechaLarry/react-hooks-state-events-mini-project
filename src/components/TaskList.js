import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskItems = tasks.map((task, index) => (
    <Task
      key={index}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));

  return <div className="tasks">{taskItems}</div>;
}

export default TaskList;
