import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Header from "~/components/Header";
import Highlights from "~/components/Highlights";
import MainInfo from "~/components/MainInfo";
import Projects from "~/components/Projects";
import { size } from "../size";
const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
  @media (max-width: ${size.lg}) {
    flex-direction: column;
  }
`;
const HighlightsContainer = styled.div`
  max-width: 40%;
  margin-top: 100px;
`;

const _index = () => {
  return (
    <MainContainer>
      <Header />
      <MainInfo />
      <Box pl={25} zIndex={1} top={"355px"} position="absolute">
        <Image
          src="/codelinesvertical.png"
          pt={{ sm: "10px", md: "0px" }}
          height={{ md: "230px", sm: "220px" }}
          visibility={{ base: "visible", lg: "hidden" }}
        />
      </Box>
      <HighlightsContainer>
        <Highlights />
      </HighlightsContainer>
      <Projects />
    </MainContainer>
  );
};

export default _index;
