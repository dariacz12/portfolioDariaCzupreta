import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import styled from "styled-components";
import Footer from "~/components/Footer";
import { Outlet } from "@remix-run/react";
import { size } from "~/size";

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
export default function MyProjectsRoute() {
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
        <Outlet />
      </Box>
      <Footer />
    </MainContainer>
  );
}
