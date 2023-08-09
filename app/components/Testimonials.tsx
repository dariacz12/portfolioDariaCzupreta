import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Icon,
  Image,
  slideFadeConfig,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
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
const WrapSlaid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-left: 50px;
`;
const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const Slaid = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const testimonialsList = [
  {
    id: 1,
    name: "Marcik Cieślinski",
    position: " Senior Manager | Business Agility Lead ",
    img: "MarcinCieslinski.jpeg",
    testimonialBody:
      "I have worked with Daria on several projects. Daria proved herself as a very effective and motivated person. She is always ready to take on any challenge brought in her way. Her willingness to learn and apply the new knowledge are extraordinary.",
  },
  {
    id: 2,
    name: "Marta Wawrzyniak - Falkowska",
    position: " Service Designer",
    img: "MartaWawrzyniakFalkowska.jpeg",
    testimonialBody:
      "Bardzo się cieszę, że miałam okazję pracować z Darią. Szybko i dobrze zorientowała się w zespole projektowym, do którego wpadła w samym środku projektu. Konstruktywnie podchodzi do każdego nowego wyzwania.",
  },
  {
    id: 3,
    name: "Rafał Pikuła",
    position: "Project Manager",
    img: "RafalPikula.jpeg",
    testimonialBody:
      "Daria dała się poznać jako osoba bardzo mocno skoncentrowana na osiąganiu założonych celów. Realizując zróżnicowane projekty z zakresu Digital Signage zawsze wykazywała się wysokim zaangażowaniem oraz profesjonalizmem. Cechował ją spokój i skrupulatność.",
  },
];
const Testimonials = () => {
  const [currentIndex, setcurrentIndex] = useState<number>(0);
  const prevSlide = () => {
    const ifFirstSlide = currentIndex === 0;
    const newIndex = ifFirstSlide
      ? testimonialsList.length - 1
      : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const ifFirstSlide = currentIndex === testimonialsList.length - 1;
    const newIndex = ifFirstSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  const goToSlaide = (slideIndex: number) => {
    setcurrentIndex(slideIndex);
  };
  return (
    <MainContainer id={"testimonials"}>
      <Heading as="h6" size="lg" mb={"20px"} mt={"20px"}>
        {" "}
        Testimonials{" "}
      </Heading>
      <Text fontSize="sm" pt={"3px"} color={"#757575"}>
        People I've worked with have said some nice things ...
      </Text>
      <WrapSlaid>
        <ChevronLeftIcon
          cursor={"pointer"}
          onClick={prevSlide}
          backgroundColor={"gray.100"}
          color={"#757575"}
          boxSize={7}
          borderRadius="full"
        />
        <Slaid>
          <Wrap zIndex={1} pt={{ base: 4, md: 3 }} pb={{ base: 4, md: 3 }}>
            <Image
              src={`/${testimonialsList[currentIndex].img}`}
              borderRadius="full"
              boxSize={{ base: "150px", md: "170px" }}
            />
          </Wrap>
          <Text
            lineHeight={"6"}
            fontSize="sm"
            pt={"3px"}
            width={"60%"}
            textAlign={"center"}
          >
            {`"${testimonialsList[currentIndex].testimonialBody}"`}
          </Text>
          <Text
            textAlign={"center"}
            lineHeight={"6"}
            fontWeight={"medium"}
            fontSize="sm"
            pt={"15px"}
            width={"60%"}
          >
            {`${testimonialsList[currentIndex].name}`}
          </Text>
          <Text
            textAlign={"center"}
            color={"#757575"}
            lineHeight={"6"}
            fontSize="sm"
            pt={"3px"}
            width={"60%"}
          >
            {`${testimonialsList[currentIndex].position}`}
          </Text>
        </Slaid>
        <ChevronRightIcon
          cursor={"pointer"}
          onClick={nextSlide}
          backgroundColor={"gray.100"}
          color={"#757575"}
          boxSize={7}
          borderRadius="full"
        />
      </WrapSlaid>
      <DotsWrapper>
        {testimonialsList.map((element) => (
          <Icon
            onClick={() =>
              goToSlaide(Number(testimonialsList.indexOf(element)))
            }
            cursor={"pointer"}
            padding={"2px"}
            margin={"5px"}
            viewBox="0 0 200 200"
            color={
              currentIndex === Number(testimonialsList.indexOf(element))
                ? "#673AB7"
                : "gray.100"
            }
          >
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        ))}
      </DotsWrapper>
    </MainContainer>
  );
};

export default Testimonials;
