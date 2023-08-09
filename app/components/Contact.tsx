import { Heading, Text } from "@chakra-ui/react";
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
const Contact = () => {
  return (
    <MainContainer id={"testimonials"}>
      <Heading as="h6" size="lg" mb={"20px"} mt={"20px"}>
        {" "}
        Contact{" "}
      </Heading>
      <Text fontSize="sm" pt={"3px"} color={"#757575"}>
        Get in touch
      </Text>
    </MainContainer>
  );
};

export default Contact;
