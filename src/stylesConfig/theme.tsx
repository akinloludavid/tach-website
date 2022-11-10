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
    pryColor: "#030303",
    secTextColor: "#5299D3",
    secBgColor: "#F5FAFE",
    greenBg: "#54C0A8",
    white: "#ffffff",
    inputBg: "#FAFBFC",
    powderBlue: "#EFFEFE",
    beryl: "#BEE3E6",
    alexandrite: "#107BC0",
    diamond: "#97C2E5",
    danger: "#AB0404",
    darkBg: "#00213C",
    secPowderBlue: "#C0E5E5",
  },
});

export const maxWidth = "1240px";
