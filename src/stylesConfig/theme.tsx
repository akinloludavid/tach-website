import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./customComponents/Button";
import { TextStyle as Text } from "./customComponents/Text";
import { HeadingStyle as Heading } from "./customComponents/Heading";
import { InputStyles as Input } from "./customComponents/Input";
const components = {
  Button,
  Text,
  Heading,

  Input,
};
export const customTheme = extendTheme({
  fonts: {
    heading: `'Rubik', sans-serif`,
    body: `'Rubik', sans-serif`,
  },
  components,
  colors: {
    // pryColor: "#c23616",
    pryColor: "#2c3e50",
    secTextColor: "#5299D3",
    light: "#f0f0f0",
  },
});

export const maxWidth = "1240px";
