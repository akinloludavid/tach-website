import React from "react";
import { Box, Flex, Heading, Text, UnorderedList } from "@chakra-ui/react";
import MainContainer from "../MainContainer";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const navLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About Us",
    route: "/about",
  },
  {
    label: "Ministries",
    route: "/ministries",
  },

  {
    label: "Events and News",
    route: "/events",
  },
  {
    label: "Contact Us",
    route: "/contact-us",
  },
];
const Footer = () => {
  return (
    <MainContainer flexDirection={["column", "row"]}>
      <Box>
        <Heading>About Us</Heading>
        <Text></Text>
      </Box>
      <Box>
        <Heading>Menu</Heading>
        <UnorderedList display={"flex"} flexDirection="column">
          {navLinks.map((link) => (
            <Link to={link.route}>{link.label}</Link>
          ))}
        </UnorderedList>
      </Box>
      <Box>
        <Heading>Contact Us</Heading>
        <Flex align={"center"} gap={4}>
          <MdOutlineLocationOn />
          <Text>124 Oloto Street, Yaba, Lagos</Text>
        </Flex>
        <Flex align={"center"} gap={4}>
          <BsGlobe2 />
          <Text>www.tacsla.org</Text>
        </Flex>
        <Flex align={"center"} gap={4}>
          <AiOutlineMail />
          <Text>tacsla@tacsla.com</Text>
        </Flex>
        <Flex align={"center"} gap={4}>
          <MdPhone />
          <Text as="a" href="tel: +2348023332862">
            08023332862
          </Text>
        </Flex>
      </Box>
    </MainContainer>
  );
};

export default Footer;
