import React from "react";
import {
  State,
  TaskContainer,
  TaskDescription,
  TaskHeader,
  TaskItemsContainer,
  TaskTitle,
  TaskTitleContainer,
} from "./styles";

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
      <TaskItemsContainer>
        <TaskTitleContainer>
          <State>Circulo</State>
          <TaskTitle>{activeTask?.title}</TaskTitle>
        </TaskTitleContainer>

        <TaskDescription>{activeTask?.description}</TaskDescription>
      </TaskItemsContainer>
    </TaskContainer>
  );
};

export default Task;
