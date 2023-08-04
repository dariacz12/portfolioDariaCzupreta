import { Box, Button, Heading } from "@chakra-ui/react";
import { createRouter } from "@remix-run/router";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

const Projects = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("mouseenter", () => {
        video.style.opacity = "1";
        video.play();
      });
      video.addEventListener("mouseleave", () => {
        video.style.opacity = "0.5";
        video.pause();
      });
    }
  }, [videoRef.current]);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      mt={{ lg: "80px", md: "60px", sm: "0px" }}
      justifyContent={"center"}
      flexWrap={"wrap"}
      width={"100vw"}
      flexDirection={"column"}
    >
      <Heading as="h6" size="lg" mb={"20px"}>
        {" "}
        Projects{" "}
      </Heading>
      <Menu>
        <Button fontSize="lg" color={"#757575"} mx={"25px"} variant="outline">
          {" "}
          All{" "}
        </Button>
        <Button fontSize="lg" color={"#757575"} mx={"10px"} variant="ghost">
          {" "}
          Mobile apps{" "}
        </Button>
        <Button fontSize="lg" color={"#757575"} mx={"10px"} variant="ghost">
          {" "}
          Websites{" "}
        </Button>
      </Menu>
      <Box
        flex="1"
        display="flex"
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent="center"
        padding={"30px"}
      >
        <video
          style={{ margin: "10px", opacity: "0.5", borderRadius: "25px" }}
          id="4"
          width={"450px"}
          ref={videoRef}
          loop
          playsInline
          muted
          src={require("../../public/video/mainpage.mov")}
        ></video>
        <video
          style={{ margin: "10px", opacity: "0.5", borderRadius: "25px" }}
          id="1"
          width={"450px"}
          ref={videoRef}
          loop
          playsInline
          muted
          src={require("../../public/video/mainpage.mov")}
        ></video>
        <video
          style={{ margin: "10px", opacity: "0.5", borderRadius: "25px" }}
          id="2"
          width={"450px"}
          ref={videoRef}
          loop
          playsInline
          muted
          src={require("../../public/video/mainpage.mov")}
        ></video>
        <video
          style={{ margin: "10px", opacity: "0.5", borderRadius: "25px" }}
          id="3"
          width={"450px"}
          ref={videoRef}
          loop
          playsInline
          muted
          src={require("../../public/video/mainpage.mov")}
        ></video>
      </Box>
    </Box>
  );
};

export default Projects;
