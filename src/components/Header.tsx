import { Box } from "@chakra-ui/react";
import BurgerMenuItem from "./BurgerMenuItem";

const Header = () => {
  return (
    <Box
      w="100%"
      py={12}
      height={"50px"}
      flex="1"
      display="flex"
      flexDirection={"column"}
      alignItems="end"
      justifyContent="center"
    >
      <BurgerMenuItem />
    </Box>
  );
};

export default Header;
