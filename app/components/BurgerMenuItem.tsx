import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
          <MenuItem>CV</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Testimonials</MenuItem>
          <MenuItem>Contacts</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default BurgerMenuItem;
