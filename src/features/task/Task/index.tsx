import React from "react";
import { TaskContainer, TaskHeader, TaskItemsContainer } from "./styles";

const Task = () => {
  return (
    <TaskContainer>
      <TaskHeader style={{ justifyContent: "flex-end" }}>
        <span>Ola</span>
        <TaskItemsContainer></TaskItemsContainer>
      </TaskHeader>
    </TaskContainer>
  );
};

export default Task;
