import Topic from "features/topic/Topic";
import { useGetTopicsQuery } from "features/topic/Topic/topicApi";
import Sidemenu from "features/ui/Sidemenu";
import React, { useEffect } from "react";
import { Container, Page, TopicSection, WelcomeText } from "./styles";

const Homepage = () => {
  const topics = useGetTopicsQuery();
  useEffect(() => {}, [topics.isSuccess]);
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
              return (
                <>
                  <Topic topic={topic} />
                </>
              );
            })}
          </TopicSection>
        </div>
      </Container>
    </Page>
  );
};

export default Homepage;
