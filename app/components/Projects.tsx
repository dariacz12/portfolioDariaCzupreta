import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { size } from "~/size";
import { useMediaQuery } from "@chakra-ui/react";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProjectBox = styled.div`
  position: relative;
  margin: 40px;

  @media (max-width: ${size.md}) {
    display: none;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: none;

  position: absolute;
  bottom: 90px;
  left: 100px;
  @media (max-width: ${size.sm}) {
    bottom: 50px;
    left: 50px;
  }
  @media (max-width: ${size.md}) {
    bottom: 50px;
    left: 50px;
  }
`;
const ProjectBoxSmall = styled.div`
  display: none;
  @media (max-width: ${size.md}) {
    display: flex;
    margin: 40px;
  }
`;
const projectsList = [
  {
    id: 1,
    type: "app",
    videoName: "mainpage.mov",
    projectName: "Test Board 1",
    mainInfo: "test info test info test info",
    tools: ["React", "TypeScript", "StyledComponents"],
  },
  {
    id: 2,
    type: "webpage",
    videoName: "mainpage.mov",
    projectName: "Test Board 2",
    mainInfo: "test info test info test info",
    tools: ["React", "TypeScript", "StyledComponents"],
  },
  {
    id: 3,
    type: "webpage",
    videoName: "mainpage.mov",
    projectName: "Test Board 3",
    mainInfo: "test info test info test info",
    tools: ["React", "TypeScript", "StyledComponents"],
  },
  {
    id: 4,
    type: "webpage",
    videoName: "mainpage.mov",
    projectName: "Test Board 4",
    mainInfo: "test info test info test info",
    tools: ["React", "TypeScript", "StyledComponents"],
  },
];
const calculateOpacity = (size: any) => {
  if (size.sm) {
    return 1;
  } else {
    return 0.5;
  }
};
const Projects = () => {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const setVideoRefs = (
    videoElement: HTMLVideoElement | null,
    index: number
  ) => {
    videoRefs.current[index] = videoElement;
  };
  useEffect(() => {
    videoRefs.current.forEach((video) => {
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
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener("mouseenter", () => {
            video.style.opacity = "1";
            video.play();
          });
          video.removeEventListener("mouseleave", () => {
            video.style.opacity = "0.5";
            video.pause();
          });
        }
      });
    };
  }, [videoRefs]);
  const [textBoxVisibility, setTextBoxVisibility] = useState<{
    [key: number]: boolean;
  }>({});

  const opacity = calculateOpacity(size);
  const handleMouseOver = (id: any) => {
    setTextBoxVisibility((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseOut = (id: any) => {
    setTextBoxVisibility((prevState) => ({ ...prevState, [id]: false }));
  };
  const [state, setState] = useState<Boolean | String>(false);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      id={"projects"}
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
        <Button
          fontSize="lg"
          color={"#757575"}
          mx={"25px"}
          variant={"outline"}
          backgroundColor={!state ? "#D1C4E9" : undefined}
          _hover={{
            bg: "#D1C4E9",
          }}
          onClick={() => setState(false)}
        >
          {" "}
          All{" "}
        </Button>
        <Button
          fontSize="lg"
          color={"#757575"}
          backgroundColor={state === "app" ? "#D1C4E9" : undefined}
          mx={"10px"}
          variant={"outline"}
          _hover={{
            bg: "#D1C4E9",
          }}
          onClick={() => setState("app")}
        >
          {" "}
          Mobile apps{" "}
        </Button>
        <Button
          fontSize="lg"
          color={"#757575"}
          backgroundColor={state === "webpage" ? "#D1C4E9" : undefined}
          mx={"10px"}
          variant={"outline"}
          _hover={{
            bg: "#D1C4E9",
          }}
          onClick={() => setState("webpage")}
        >
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
        width={"100%"}
        px={"30px"}
      >
        {projectsList
          .filter(({ type }) => type === state || !state)
          .map(({ videoName, id, projectName, mainInfo, tools }, index) => {
            return (
              <Box key={index}>
                <ProjectBox
                  onMouseOver={() => handleMouseOver(id)}
                  onMouseOut={() => handleMouseOut(id)}
                >
                  <video
                    style={{ opacity: 0.5, borderRadius: "15px" }}
                    width={"650px"}
                    ref={(videoElement) => setVideoRefs(videoElement, index)}
                    loop
                    playsInline
                    muted
                    src={require(`../../public/video/mainpage.mov`)}
                  ></video>

                  {textBoxVisibility[id] && (
                    <TextBox>
                      <Heading
                        mb={"10px"}
                        color={"white"}
                        textShadow={"lg"}
                        as="h4"
                        fontSize={{ lg: "lg", md: "md", sm: "sm" }}
                      >
                        {projectName}
                      </Heading>
                      <Text
                        mb={"10px"}
                        color={"white"}
                        fontSize={{ lg: "lg", md: "md", sm: "sm" }}
                        textShadow={"2xl"}
                      >
                        {mainInfo}
                      </Text>
                      <Box style={{ display: "flex" }}>
                        {tools.map((tool) => (
                          <Text
                            fontSize={{ sm: "xs", base: "sm" }}
                            borderRadius={"5px"}
                            padding={"5px"}
                            backgroundColor={"#D1C4E9"}
                            mr={"8px"}
                            color={"white"}
                            textShadow={"lg"}
                          >
                            {tool}
                          </Text>
                        ))}
                      </Box>
                    </TextBox>
                  )}
                </ProjectBox>
                <ProjectBoxSmall>
                  <video
                    style={{ borderRadius: "15px" }}
                    width={"650px"}
                    src={require(`../../public/video/mainpage.mov`)}
                  ></video>
                  <TextBox>
                    <Heading
                      mb={"10px"}
                      color={"white"}
                      textShadow={"lg"}
                      as="h4"
                      fontSize={"sm"}
                    >
                      {projectName}
                    </Heading>
                    <Text
                      mb={"10px"}
                      color={"white"}
                      fontSize={"sm"}
                      textShadow={"2xl"}
                    >
                      {mainInfo}
                    </Text>
                    <Box style={{ display: "flex" }}>
                      {tools.map((tool) => (
                        <Text
                          fontSize={"xs"}
                          borderRadius={"5px"}
                          padding={"5px"}
                          backgroundColor={"#D1C4E9"}
                          mr={"8px"}
                          color={"white"}
                          textShadow={"lg"}
                        >
                          {tool}
                        </Text>
                      ))}
                    </Box>
                  </TextBox>
                </ProjectBoxSmall>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Projects;
