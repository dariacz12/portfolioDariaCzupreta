import React from "react";
import styled from "styled-components";
import Footer from "~/components/Footer";
import { Box } from "@chakra-ui/react";
import { size } from "~/size";
import { ArrowBackIcon } from "@chakra-ui/icons";
const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
  @media (max-width: ${size.lg}) {
    flex-direction: column;
  }
`;
const projectsRoute = () => {
  return (
    <MainContainer>
      <Box
        w="100%"
        py={12}
        height={"50px"}
        flex="1"
        display="flex"
        flexDirection={"column"}
        alignItems="flex-start"
        justifyContent="center"
      >
        <ArrowBackIcon />
      </Box>
      <Footer />
    </MainContainer>
  );
};

export default projectsRoute;
