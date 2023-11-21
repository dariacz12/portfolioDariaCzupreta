import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

import { size } from "~/size";

const Highlights = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      width={"100vw"}
    >
      <Card py={"10px"} mx={10} width={"max"}>
        <CardBody
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading as="h6" size="md">
            Highlights
          </Heading>
          <Text
            fontSize="md"
            pt={"10px"}
            color={"#673AB7"}
            fontWeight={"medium"}
          >
            Programming Languages:
          </Text>
          <Text fontSize="md" pt={"3px"}>
            JavaScript, React, CSS, HTML
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            Dev Tools:
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Git
          </Text>
          <Text fontSize="md" pt={"3px"}>
            TypeScript
          </Text>
          <Text fontSize="md" pt={"3px"}>
            React Router, React Query{" "}
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            React Hook Form, Redux
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Firebase, Styled Components
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Elementor Pro
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Mocha, SCSS, Axios
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            Teamwork Tools:
          </Text>
          <Text fontSize="md" pt={"3px"}>
            Miro, Discord, Slack
          </Text>
          <Text fontSize="md" pt={"3px"}>
            Clickup, Teamwork, Jira, Trello
          </Text>
          <Text fontSize="md" pt={"3px"}>
            Scrum, Kanban, Lean, Agile, Design Thinking
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            Languages I speak:
          </Text>
          <Text fontSize="md" pt={"3px"}>
            English, Polish, Russian, Belarusian
          </Text>
        </CardBody>
      </Card>
      <Image
        pl={"20px"}
        pr={"10px"}
        src="/programmergirl.svg"
        pt={"10px"}
        mt={{ md: "40px", sm: "0px" }}
        mb={{ md: "0px", sm: "40px" }}
        height={{ md: "430px", sm: "420px" }}
      />
    </Box>
  );
};

export default Highlights;
