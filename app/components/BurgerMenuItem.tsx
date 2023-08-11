import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import openCV from "~/customHooks/openCV";

const BurgerMenuItem = () => {
  const handleClickScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box mr={10}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem onClick={() => openCV()}>CV</MenuItem>
          <MenuItem onClick={() => handleClickScroll("#projects")}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => handleClickScroll("#testimonials")}>
            Testimonials
          </MenuItem>
          <MenuItem onClick={() => handleClickScroll("#contact")}>
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default BurgerMenuItem;
