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
      <Card
        py={"10px"}
        mx={10}
        px={10}
        width={"max"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as="h6" size="lg" mt={"15px"}>
          {" "}
          Highlights{" "}
        </Heading>
        <CardBody
          textAlign={"start"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            fontSize="md"
            pt={"1px"}
            color={"#673AB7"}
            fontWeight={"medium"}
          >
            • Frontend Frameworks & Libraries:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            React, React Native, Expo
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Core Web Technologies:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            {" "}
            TypeScript, JavaScript, HTML, CSS
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • React Ecosystem:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            React Router, React Query
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            React Hook Form, Redux
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Styling & UI:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Tailwind, NativeWind
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Styled Components, SCSS
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Backend / APIs / Data:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Firebase, Strapi, Axios
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Testing:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Mocha, Maestro E2E tests
          </Text>

          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • AI Development Tools:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Cursor, Antigravity, Figma MCP
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Version Control & Design Tools:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Git, Figma (UI/UX mockups)
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Collaboration Tools:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            ClickUp, Teamwork, Jira, Trello
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Miro, Discord, Slack
          </Text>
          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Development Methodologies:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Scrum, Kanban, Lean, Agile
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Design Thinking
          </Text>

          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • AI Development Tools:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            Cursor, Antigravity, Figma MCP
          </Text>

          <Text
            fontSize="md"
            color={"#673AB7"}
            fontWeight={"medium"}
            pt={"10px"}
          >
            • Languages I speak:
          </Text>
          <Text fontSize="md" pt={"3px"} pl={"12px"}>
            English, Polish
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
