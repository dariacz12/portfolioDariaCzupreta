import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { size } from "~/size";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { projectsList } from "~/listOfProjects";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
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
  width: 100%;
  background-color: rgba(6, 0, 6, 0.5);
  position: absolute;
  bottom: 0px;
  padding-left: 100px;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  @media (max-width: ${size.sm}) {
    bottom: 0px;
    padding-left: 50px;
  }
  @media (max-width: ${size.md}) {
    bottom: 0px;
    padding-left: 50px;
  }
`;

const ProjectBoxSmall = styled.div`
  position: relative;
  display: none;
  @media (max-width: ${size.md}) {
    display: flex;
    margin: 20px;
  }
`;

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
  const navigate = useNavigate();
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
                  onClick={() => navigate(`/myprojects/${id}`)}
                >
                  <video
                    style={{ opacity: 0.5, borderRadius: "15px" }}
                    width={"650px"}
                    ref={(videoElement) => setVideoRefs(videoElement, index)}
                    loop
                    playsInline
                    muted
                    src={videoName}
                  ></video>

                  {textBoxVisibility[id] && (
                    <TextBox>
                      <Box>
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
                          fontSize={{ lg: "md", md: "md", sm: "sm" }}
                          textShadow={"2xl"}
                          pr={"20px"}
                        >
                          {mainInfo}
                        </Text>
                        <Box
                          style={{ display: "flex" }}
                          position={"relative"}
                          zIndex={2}
                        >
                          {tools
                            .filter((tool) => tools.indexOf(tool) <= 4)
                            .map((tool) => (
                              <Text
                                fontSize={{ sm: "xs", base: "sm" }}
                                borderRadius={"5px"}
                                padding={"5px"}
                                backgroundColor={"#673AB7"}
                                mr={"8px"}
                                color={"white"}
                                textShadow={"lg"}
                              >
                                {tool}
                              </Text>
                            ))}
                        </Box>
                      </Box>
                    </TextBox>
                  )}
                </ProjectBox>
                <ProjectBoxSmall onClick={() => navigate(`/myprojects/${id}`)}>
                  <video
                    style={{ borderRadius: "15px" }}
                    width={"650px"}
                    src={videoName}
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
                      pr={"30px"}
                    >
                      {mainInfo}
                    </Text>
                    <Box style={{ display: "flex" }}>
                      {tools
                        .filter((tool) => tools.indexOf(tool) <= 3)
                        .map((tool) => (
                          <Text
                            fontSize={"xs"}
                            borderRadius={"5px"}
                            padding={"5px"}
                            backgroundColor={"#673AB7"}
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
