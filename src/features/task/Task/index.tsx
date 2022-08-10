import React from "react";
import { TaskContainer, TaskHeader, TaskItemsContainer } from "./styles";

interface Task {
  id: number;
  title: string;
  topicId: number;
  description: string;
  completed: boolean;
}

interface TaskProps {
  activeTask?: Task;
  setActiveTask?: any;
}

const Task = (props: TaskProps) => {
  const { activeTask } = props;

  return (
    <TaskContainer>
      <TaskHeader>
        <span>{activeTask?.title}</span>
      </TaskHeader>
      <TaskItemsContainer></TaskItemsContainer>
    </TaskContainer>
  );
};

export default Task;
