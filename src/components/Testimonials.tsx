import { Heading, Icon, Image, Text, Wrap } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { size } from "../size";

const MainContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: ${size.md}) {
    padding-top: 0px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  max-width: 800px;
  width: 100%;
  gap: 20px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  min-width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;

  @media (max-width: ${size.md}) {
    min-height: 380px;
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const testimonialsList = [
  {
    id: 1,
    name: "Radosław Michalak",
    position: "Founder Swiplo",
    img: "RadosławMichalak.jpeg",
    testimonialBody:
      "Jestem bardzo zadowolony ze współpracy z Darią przy przepisywaniu naszej aplikacji mobilnej Swiplo. Nowa wersja wygląda znacznie lepiej, działa szybciej i oferuje więcej przydatnych funkcji. Polecam Darię każdemu, kto szuka frontend developera, który naprawdę rozumie biznesowe potrzeby klienta.",
  },
  {
    id: 2,
    name: "Marcin Cieślinski",
    position: "Senior Manager | Business Agility Lead",
    img: "MarcinCieslinski.jpeg",
    testimonialBody:
      "I have worked with Daria on several projects and she consistently proved to be a very effective and motivated professional. She approaches challenges with confidence and determination, and her willingness to learn and apply new knowledge makes her a valuable and reliable team member.",
  },
  {
    id: 3,
    name: "Rafał Pikuła",
    position: "Project Manager",
    img: "RafalPikula.jpeg",
    testimonialBody:
      "Daria dała się poznać jako osoba bardzo skoncentrowana na osiąganiu założonych celów. Podczas realizacji projektów z zakresu Digital Signage wykazywała się dużym zaangażowaniem, profesjonalizmem oraz odpowiedzialnym podejściem do powierzonych zadań i współpracy z zespołem.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const { offsetWidth } = scrollRef.current;

      scrollRef.current.scrollTo({
        left: index * offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <MainContainer id="testimonials">
      <Heading as="h6" size="lg" mb="20px" mt="20px">
        Testimonials
      </Heading>

      <Text fontSize="sm" pt="3px" color="#757575">
        People I've worked with have said some nice things ...
      </Text>

      <SliderContainer ref={scrollRef}>
        {testimonialsList.map((item) => (
          <Slide key={item.id}>
            <Wrap zIndex={1} pt={{ base: 4, md: 3 }} pb={{ base: 4, md: 3 }}>
              <Image
                src={`/${item.img}`}
                borderRadius="full"
                boxSize={{ base: "150px", md: "170px" }}
              />
            </Wrap>

            <Text
              lineHeight="6"
              fontSize="sm"
              pt="3px"
              width={{ base: "90%", md: "60%" }}
              textAlign="center"
            >
              {`"${item.testimonialBody}"`}
            </Text>

            <Text
              textAlign="center"
              lineHeight="6"
              fontWeight="medium"
              fontSize="sm"
              pt="15px"
              width="60%"
            >
              {item.name}
            </Text>

            <Text
              textAlign="center"
              color="#757575"
              lineHeight="6"
              fontSize="sm"
              pt="3px"
              width="60%"
            >
              {item.position}
            </Text>
          </Slide>
        ))}
      </SliderContainer>

      <DotsWrapper>
        {testimonialsList.map((_, index) => (
          <Icon
            key={index}
            onClick={() => scrollToSlide(index)}
            cursor="pointer"
            padding="2px"
            margin="5px"
            viewBox="0 0 200 200"
            color={activeIndex === index ? "#673AB7" : "gray.200"}
          >
            <path
              fill="currentColor"
              d="M 100,100 m -75,0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        ))}
      </DotsWrapper>
    </MainContainer>
  );
};

export default Testimonials;
