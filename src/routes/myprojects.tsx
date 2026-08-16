import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { projectsList } from "../listOfProjects";
import { size } from "../size";
import { useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const TextWrap = styled.div`
  padding-left: 350px;
  padding-right: 350px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${size.xl}) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (max-width: ${size.lg}) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: ${size.md}) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
const ProjectBox = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const HeaderBox = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;
  padding-left: 80px;
  padding-right: 80px;
  @media (max-width: ${size.md}) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
const BoxLine = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  height: 1px;
  background-color: #bdbdbd;

  @media (max-width: ${size.md}) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;
export default function ProjectRoute() {
  const paramId = useParams().projectId;
  console.log("params", paramId);
  const [pageLoaded, setPageLoaded] = useState<boolean>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setPageLoaded(true);
    const video = videoRef.current;
    if (video) {
      video.addEventListener("canplay", () => {
        video.play();
      });
    }
  }, []);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch(() => {});
      }
    }
  }, []);
  const navigate = useNavigate();
  return (
    <MainContainer>
      <HeaderBox>
        <ChevronLeftIcon
          onClick={() => navigate(-1)}
          cursor={"pointer"}
          backgroundColor={"#D1C4E9"}
          color={"white"}
          boxSize={8}
          borderRadius="full"
        />
      </HeaderBox>
      <BoxLine></BoxLine>
      <Box>
        <Box>
          {paramId &&
            projectsList
              .filter(({ id }) => id === Number(paramId))
              .map(
                ({
                  projectName,
                  videoName,
                  mainInfo,
                  text,
                  tools,
                  website,
                  github,
                  type,
                  images,
                  assertsType,
                }) => (
                  <Box display={"flex"} flexDirection={"column"}>
                    <TextWrap>
                      <Heading as="h3" size="xl" my={5}>
                        {projectName}
                      </Heading>
                      <Text fontSize="md">{mainInfo}</Text>
                      <ProjectBox>
                        {pageLoaded && (
                          <video
                            style={{ borderRadius: "15px" }}
                            autoPlay={true}
                            ref={videoRef}
                            loop
                            playsInline
                            muted
                            src={videoName}
                          ></video>
                        )}
                      </ProjectBox>
                      <Text
                        pr={{ "2xl": "200px" }}
                        pl={{ "2xl": "200px" }}
                        fontSize="md"
                        fontWeight={"medium"}
                        color={"#757575"}
                      >
                        About the Project
                      </Text>
                      <Text
                        pr={{ "2xl": "200px" }}
                        pl={{ "2xl": "200px" }}
                        lineHeight="170%"
                        fontSize="sm"
                        color={"#757575"}
                      >
                        {" "}
                        {text}{" "}
                      </Text>
                    </TextWrap>
                    <Box
                      position={"relative"}
                      display={"flex"}
                      alignItems={"center"}
                      backgroundColor={"#673AB7"}
                      w="100%"
                      height={{ base: "430px", md: "300px", lg: "350px" }}
                    >
                      <Box
                        zIndex={1}
                        position={"absolute"}
                        alignContent={"start"}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <TextWrap>
                          <Box pr={{ "2xl": "200px" }} pl={{ "2xl": "200px" }}>
                            <Text
                              color={"white"}
                              fontWeight={"medium"}
                              fontSize="md"
                            >
                              Technologies
                            </Text>
                            <Box
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                paddingTop: "15px",
                              }}
                            >
                              {tools.map((tool) => (
                                <Box
                                  fontSize={"sm"}
                                  borderRadius={"8px"}
                                  padding={"10px"}
                                  marginTop={"15px"}
                                  marginRight={"15px"}
                                  backgroundColor={"#D1C4E9"}
                                  color={"white"}
                                  fontWeight={"medium"}
                                >
                                  <div
                                    style={{
                                      textShadow: "#673AB7 1px 0 15px;",
                                    }}
                                  >
                                    {tool}
                                  </div>
                                </Box>
                              ))}
                            </Box>
                            <Box display={"flex"} flexWrap={"wrap"}>
                              {website && (
                                <Box paddingTop={"25px"} paddingRight={"100px"}>
                                  <Text
                                    color={"white"}
                                    fontWeight={"medium"}
                                    fontSize="md"
                                  >
                                    {type === "app" ? "App Store" : "Website"}
                                  </Text>
                                  <Link
                                    fontSize="sm"
                                    fontWeight={"medium"}
                                    color={"white"}
                                    href={`${website}`}
                                    isExternal
                                  >
                                    {" "}
                                    {website}{" "}
                                  </Link>
                                </Box>
                              )}
                              {github && (
                                <Box paddingTop={"25px"}>
                                  <Text
                                    color={"white"}
                                    fontWeight={"medium"}
                                    fontSize="md"
                                  >
                                    {" "}
                                    GitHub
                                  </Text>
                                  <Link
                                    fontSize="sm"
                                    fontWeight={"medium"}
                                    color={"white"}
                                    href={`${github}`}
                                    isExternal
                                  >
                                    {" "}
                                    {github}{" "}
                                  </Link>
                                </Box>
                              )}
                            </Box>
                          </Box>
                        </TextWrap>
                      </Box>
                    </Box>

                    {/* <TextWrap> */}
                    <Box
                      display={"flex"}
                      alignContent={"center"}
                      justifyContent={"center"}
                      flexDirection={"row"}
                      flexWrap={"wrap"}
                      p={"35"}
                    >
                      {paramId &&
                        projectsList &&
                        images?.map(({ name, caption }) => {
                          return (
                            <Box
                              p={"30px"}
                              display={"flex"}
                              flexDirection={"column"}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                              {assertsType === "imageVertical" && (
                                <Image
                                  style={{ borderRadius: "15px" }}
                                  src={`/${name}`}
                                  mb={"30px"}
                                  width={{ md: "300px", base: "200px" }}
                                />
                              )}
                              {assertsType === "videoVertical" && (
                                <video
                                  style={{
                                    borderRadius: "15px",
                                    marginBottom: "15px",
                                    width: "300px",
                                  }}
                                  autoPlay={true}
                                  ref={videoRef}
                                  loop
                                  playsInline
                                  muted
                                  src={`/${name}`}
                                ></video>
                              )}

                              {assertsType === "imageHorisontal" && (
                                <Image
                                  style={{ borderRadius: "15px" }}
                                  src={`/${name}`}
                                  mb={"30px"}
                                  width={{ md: "950px", base: "500px" }}
                                />
                              )}
                              <Text
                                fontSize="sm"
                                color={"#757575"}
                                fontWeight={"medium"}
                                textAlign={"center"}
                                pb={"5"}
                              >
                                {" "}
                                {caption}{" "}
                              </Text>
                            </Box>
                          );
                        })}
                    </Box>
                    {/* </TextWrap> */}
                  </Box>
                ),
              )}
        </Box>
      </Box>
      <Footer />
    </MainContainer>
  );
}
