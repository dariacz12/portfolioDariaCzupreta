import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "@remix-run/react";
import styled from "styled-components";
import { projectsList } from "~/listOfProjects";

const TextWrap = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  display: flex;

  justify-content: center;
  flex-direction: column;
`;
export default function ProjectRoute() {
  const params = useParams().projectId;

  console.log("params", params);
  return (
    <Box>
      {
        <Box display={"flex"} flexDirection={"column"}>
          <TextWrap>
            <Heading as="h3" size="xl" my={5}>
              Frontend Developer
            </Heading>
            <Text></Text>
          </TextWrap>
        </Box>
      }
    </Box>
  );
}
