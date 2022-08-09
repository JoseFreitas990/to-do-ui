import Add from "assets/Add/Add";
import Cross from "assets/Cross/Cross";
import Ok from "assets/Ok/Ok";
import Pencil from "assets/Pencil/Pencil";
import { Input } from "components";
import React, { useState } from "react";
import {
  ButtonsContainer,
  InputContainer,
  TopicContainer,
  TopicHeader,
  TopicItemsContainer,
} from "./styles";

type TopicProps = {
  id: number;
  name: string;
};

interface Topic {
  topic: TopicProps;
  index: number;
}

const Topic = (props: Topic) => {
  const { topic, index } = props;

  const [openTopic, setOpenTopic] = useState<number[]>([]);

  const [editTopic, setEditTopic] = useState<number[]>([]);

  const openTopicHandler = (id: number) => {
    setOpenTopic([id]);
    setEditTopic([]);
  };

  const editTopicHandler = (id: number) => {
    setEditTopic([id]);
    setOpenTopic([]);
  };

  const deleteAndCloseEditerHandler = () => {
    setEditTopic([]);
  };

  return (
    <TopicContainer>
      <TopicHeader>
        <span>{topic.name}</span>

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
                  <Cross />
                </>
              )}
            </>
          ) : (
            <>
              <Ok />
              <Cross onClick={() => setOpenTopic([])} />
            </>
          )}
        </ButtonsContainer>
      </TopicHeader>
      <TopicItemsContainer>
        {/* {openTopic.includes(index) && (
          <InputContainer>
            <Input />
          </InputContainer>
        )} */}
      </TopicItemsContainer>
    </TopicContainer>
  );
};

export default Topic;
