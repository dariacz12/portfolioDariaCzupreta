import { Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { size } from "~/size";
import { Box } from "@chakra-ui/react";
const MainContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  @media (max-width: ${size.md}) {
    padding-top: 0px;
  }
`;
const logolist = [
  {
    name: "linkdin.png",
    link: "https://www.linkedin.com/in/daria-czupreta-326b15158/",
  },
  { name: "github.png", link: "https://github.com/dariacz12" },
  { name: "email.png", email: "daria.czupreta@gmail.com" },
  { name: "phone.png", phoneNumber: "+48730732967" },
];
const Footer = () => {
  const handleClickEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <MainContainer>
      <Box
        display={"flex"}
        backgroundColor={"#673AB7"}
        justifyContent={"center"}
        w="100%"
        height={"250px"}
      >
        <Box mt={"80px"} display={"flex"} flexDirection={"column"}>
          <Text color={"white"} fontWeight={"medium"} fontSize="md">
            Get in touch, contact me{" "}
          </Text>
          <Box display={"flex"}>
            {logolist.map(({ name, link, email, phoneNumber }) => (
              <a target={"_blank"} href={`${link}`}>
                <Image
                  onClick={() => {
                    email && handleClickEmail(email);
                    phoneNumber && handlePhoneCall(phoneNumber);
                  }}
                  cursor={"pointer"}
                  p={"5px"}
                  src={`/${name}`}
                  pt={"30px"}
                  height={{ md: "70px", sm: "60px" }}
                />{" "}
              </a>
            ))}
          </Box>
        </Box>
        <Box pl={25} zIndex={1}>
          <Image
            src="/computer.png"
            pt={"30px"}
            height={{ md: "230px", sm: "220px" }}
          />
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Footer;
