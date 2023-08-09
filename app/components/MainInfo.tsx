import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Text,
  useMediaQuery,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import styled from "styled-components";
import openCV from "~/customHooks/openCV";
import { size } from "~/size";

const MainContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${size.md}) {
    padding-top: 0px;
  }
`;
const TextWrapper = styled.div`
  padding: 5px 30px;
`;

const MainInfo = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  // const handleClick = () => {
  //   const pdfPath = '/documents/cvDariaCzupreta.pdf';
  //   window.open(pdfPath, '_blank');
  // };
  return (
    <MainContainer>
      <Heading as="h2" size="2xl" my={5}>
        Frontend Developer
      </Heading>
      <TextWrapper>
        <Text textAlign={"center"} fontSize={{ base: "lg", md: "xl" }}>
          I code beautifully, simple things, and I love what I do
        </Text>
      </TextWrapper>

      <Wrap zIndex={1} pt={{ base: 5, md: 3 }} pb={{ base: 4, md: 3 }}>
        <Image
          src="/avatarDCz.jpg"
          borderRadius="full"
          boxSize={{ base: "200px", md: "220px" }}
        />
      </Wrap>
      <Text zIndex={1} color={"white"} fontWeight={"medium"} fontSize="xl">
        Daria Czupreta
      </Text>
      <Button
        my={3}
        zIndex={2}
        color={"whiteAlpha"}
        bgColor={"#D1C4E9"}
        onClick={() => openCV()}
      >
        Download CV
      </Button>
      <Box
        backgroundColor={"#673AB7"}
        w="100%"
        height={"250px"}
        position="absolute"
        top={"250px"}
      ></Box>
    </MainContainer>
  );
};

export default MainInfo;
