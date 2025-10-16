import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

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
            JavaScript, React Native
          </Text>
          <Text fontSize="md" pt={"3px"}>
            React, CSS, HTML
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
            Git, Expo, TypeScript
          </Text>
          <Text fontSize="md" pt={"3px"}>
            React Router, React Query, Axios{" "}
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            React Hook Form, Redux
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Firebase, Strapi
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Styled Components, Tailwind
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Nativewind, SCSS
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Maestro E2E tests, Mocha
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Figma (creating UI/UX mockups)
          </Text>
          <Text fontSize="md" pt={"3px"}>
            {" "}
            Elementor Pro
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
        mt={{ md: "40px", base: "0px" }}
        mb={{ xs: "40px", md: "0px", base: "40px" }}
        height={{ md: "430px", base: "420px" }}
      />
    </Box>
  );
};

export default Highlights;
