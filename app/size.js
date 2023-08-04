import { extendTheme } from "@chakra-ui/react";

const customeTheme = extendTheme({
  colors: {},
  fonts: {},
  fontSizes: {},
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
});

const theme = extendTheme({ customeTheme });

export default customeTheme;

export const size = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};
