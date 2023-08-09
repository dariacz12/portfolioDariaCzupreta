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
          <MenuItem onClick={() => (window.location.href = "#projects")}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => (window.location.href = "#testimonials")}>
            Testimonials
          </MenuItem>
          <MenuItem>Contacts</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default BurgerMenuItem;
