import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link as CLink,
  UnorderedList,
} from "@chakra-ui/react";
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
    <MainContainer flexDirection={["column"]} bgColor="#2f3542" py="48px">
      <Grid templateColumns={"repeat(3,1fr)"} gap={[8]}>
        <GridItem>
          <Box>
            <Heading color="white" fontSize={"24px"} fontWeight="500" mb="8">
              About Us
            </Heading>
            <Text color="white">
              The Apostolic Church Nigeria is built on a fundamental doctrinal
              belief based on the Holy Scriptures.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Heading color="white" fontSize={"24px"} fontWeight="500" mb="8">
              Menu
            </Heading>
            <UnorderedList ml="0" display={"flex"} flexDirection="column">
              {navLinks.map((link) => (
                <CLink
                  as={Link}
                  w="fit-content"
                  color="#fff"
                  _hover={{ borderBottom: "1px solid tomato" }}
                  to={link.route}
                >
                  {link.label}
                </CLink>
              ))}
            </UnorderedList>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Heading color="white" fontSize={"24px"} fontWeight="500" mb="8">
              Contact Us
            </Heading>
            <Flex align={"center"} gap={4} mb="2">
              <MdOutlineLocationOn color="#fff" size={"24"} />
              <Text color="#fff">124 Oloto Street, Yaba, Lagos</Text>
            </Flex>
            <Flex align={"center"} gap={4} mb="2">
              <BsGlobe2 color="#fff" size={"24"} />
              <Text color="#fff">www.tacsla.org</Text>
            </Flex>
            <Flex align={"center"} gap={4} mb="2">
              <AiOutlineMail color="#fff" size={"24"} />
              <Text color="#fff">tacsla@tacsla.com</Text>
            </Flex>
            <Flex align={"center"} gap={4} mb="2">
              <MdPhone color="#fff" size={"24"} />
              <Text color="#fff" as="a" href="tel: +2348023332862">
                08023332862
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </MainContainer>
  );
};

export default Footer;
