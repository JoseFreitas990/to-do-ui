import Sidemenu from "features/ui/Sidemenu";
import React from "react";
import { Container, Page, TopicSection, WelcomeText } from "./styles";

const Homepage = () => {
  return (
    <Page>
      <Sidemenu />
      <Container>
        <WelcomeText>Good morning!</WelcomeText>
        <WelcomeText> Enjoy your planning!</WelcomeText>

        <input />
        <button>Submit</button>

        <div style={{ display: "flex" }}>
          <TopicSection></TopicSection>
        </div>
      </Container>
    </Page>
  );
};

export default Homepage;
