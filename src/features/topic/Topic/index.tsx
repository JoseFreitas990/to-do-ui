import Add from "assets/Add/Add";
import Cross from "assets/Cross/Cross";
import Ok from "assets/Ok/Ok";
import Pencil from "assets/Pencil/Pencil";
import React, { useState } from "react";
import {
  ButtonsContainer,
  InputContainer,
  Line,
  SubTopicContainer,
  TaskItem,
  TaskText,
  TopicContainer,
  TopicHeader,
  Input,
  TopicItemsContainer,
} from "./styles";

type ITopic = {
  id: number;
  title: string;
};

type ITask = {
  id: number;
  topicId: number;
  title: string;
  description: string;
  completed: boolean;
};
interface TopicProps {
  topic: ITopic;
  tasks?: ITask[];
  index: number;
  activeTask: ITask;
  setActiveTask: any;
}

const Topic = (props: TopicProps) => {
  const { topic, index, tasks, activeTask, setActiveTask } = props;

  const [openTopic, setOpenTopic] = useState<number[]>([]);

  const [editTopic, setEditTopic] = useState<number[]>([]);

  const [topicDeleteArray, setTopicDeleteArray] = useState<number[]>([]);

  const [topicInput, setTopicInput] = useState("");

  const [deleteOpen, setDeleteOpen] = useState(false);

  const openTopicHandler = (id: number) => {
    setTopicDeleteArray([]);
    setOpenTopic([id]);
    setEditTopic([]);
    setDeleteOpen(false);
  };

  const editTopicHandler = (id: number) => {
    setDeleteOpen(true);
    setTopicDeleteArray([]);
    setEditTopic([id]);
    setOpenTopic([]);
  };

  const addTopicHandler = (id: number) => {
    if (topicDeleteArray.includes(id)) {
      setTopicDeleteArray(topicDeleteArray.filter((item) => item !== id));
    } else {
      setTopicDeleteArray((oldArray) => [...oldArray, id]);
    }
  };

  const deleteAndCloseEditerHandler = () => {
    setTopicDeleteArray([]);
    setEditTopic([]);
    setDeleteOpen(false);
  };

  const selectOrDelete = (item: any, index: any) => {
    if (deleteOpen && editTopic.includes(index)) {
      addTopicHandler(item.id);
    } else {
    }
  };
  return (
    <TopicContainer>
      <TopicHeader>
        <span>{topic.title}</span>

        <ButtonsContainer>
          {!openTopic.includes(index) ? (
            <>
              {!editTopic.includes(index) ? (
                <>
                  <Pencil onClick={() => editTopicHandler(index)} />
                  <Add onClick={() => openTopicHandler(index)} />
                </>
              ) : (
                <>
                  <Ok />
                  <Cross onClick={() => deleteAndCloseEditerHandler()} />
                </>
              )}
            </>
          ) : (
            <>
              <Ok onClick={() => console.log("Adicionado")} />
              <Cross onClick={() => setOpenTopic([])} />
            </>
          )}
        </ButtonsContainer>
      </TopicHeader>
      <TopicItemsContainer>
        {openTopic.includes(index) && (
          <InputContainer>
            <Input
              value={topicInput}
              onChange={(e) => setTopicInput(e.currentTarget.value)}
            />
          </InputContainer>
        )}
        {tasks?.map((task, index) => {
          return (
            <SubTopicContainer key={task.id}>
              <TaskItem onClick={() => setActiveTask(task)}>
                <TaskText>{task.title}</TaskText>
              </TaskItem>
              <Line />
            </SubTopicContainer>
          );
        })}
      </TopicItemsContainer>
    </TopicContainer>
  );
};

export default Topic;
