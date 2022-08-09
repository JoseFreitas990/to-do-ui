import React from "react";
import { TopicContainer, TopicHeader } from "./styles";

type TopicProps = {
  id: number;
  name: string;
};

interface Topic {
  topic: TopicProps;
}

const Topic = (props: Topic) => {
  const { topic } = props;
  return (
    <TopicContainer>
      <TopicHeader>{topic.name}</TopicHeader>
    </TopicContainer>
  );
};

export default Topic;
