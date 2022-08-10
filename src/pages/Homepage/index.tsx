import { useAppDispatch } from "app/hooks";
import Task from "features/task/Task";
import { useGetTasksQuery } from "features/task/taskApi";
import Topic from "features/topic/Topic";
import { useGetTopicsQuery } from "features/topic/topicApi";
import { setActiveTopic } from "features/topic/topicSlice";
import Sidemenu from "features/ui/Sidemenu";
import React, { useEffect } from "react";
import { Container, Page, TopicSection, WelcomeText } from "./styles";

const Homepage = () => {
  const topics = useGetTopicsQuery();

  const tasks = useGetTasksQuery();

  return (
    <Page>
      <Sidemenu />
      <Container>
        <WelcomeText>Good morning!</WelcomeText>
        <WelcomeText> Enjoy your planning!</WelcomeText>

        <input />
        <button>Submit</button>

        <div style={{ display: "flex" }}>
          <TopicSection>
            {topics.data?.map((topic, index) => {
              let filteredTasks = tasks.data?.filter(
                (e) => e.topicId === topic.id
              );

              return (
                <Topic
                  key={topic.id}
                  topic={topic}
                  tasks={filteredTasks}
                  index={index}
                />
              );
            })}
          </TopicSection>
          {/* <TopicSection>
            {tasks.data?.map((task, index) => {
              return <Task key={task.id} />;
            })}
          </TopicSection> */}
        </div>
      </Container>
    </Page>
  );
};

export default Homepage;
