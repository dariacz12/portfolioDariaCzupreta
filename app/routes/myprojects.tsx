import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import styled from "styled-components";
import Footer from "~/components/Footer";
import { Outlet } from "@remix-run/react";

const MainContainer2 = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function MyProjectsRoute() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <MainContainer2>
      <Box w="100%" height={"50px"} mt={"40px"} px={"40px"}>
        <ChevronLeftIcon
          onClick={() => navigate(-1)}
          cursor={"pointer"}
          backgroundColor={"#D1C4E9"}
          color={"white"}
          boxSize={8}
          borderRadius="full"
        />
      </Box>
      <Box mx={"40px"} height={"1px"} backgroundColor={"blackAlpha.300"}></Box>
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </MainContainer2>
  );
}
