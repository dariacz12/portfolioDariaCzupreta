import { useEffect, useState } from "react";
import { Box, Image, Spinner } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "../components/Header";
import MainInfo from "../components/MainInfo";
import Highlights from "../components/Highlights";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const HighlightsContainer = styled.div`
  max-width: 40%;
  margin-top: 100px;
`;

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trigger loader whenever this page mounts
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []); // runs every time MainPage mounts

  return (
    <MainContainer>
      {loading && (
        <Overlay>
          <Spinner size="xl" thickness="4px" speed="0.65s" color="white" />
        </Overlay>
      )}

      <Header />
      <MainInfo />

      <Box pl={25} zIndex={1} top={"355px"} position="absolute">
        <Image
          src="/codelinesvertical.png"
          pt={{ base: "10px", md: "0px" }}
          height={{ md: "230px", base: "220px" }}
          visibility={{ base: "visible", lg: "hidden" }}
        />
      </Box>

      <HighlightsContainer>
        <Highlights />
      </HighlightsContainer>

      <Projects />
      <Testimonials />
      <Footer />
    </MainContainer>
  );
};

export default MainPage;
