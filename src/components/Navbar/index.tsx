import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import MainContainer from "../MainContainer";
import { useNavigate } from "react-router-dom";
import { useCustomMediaQuery, useIsNavActive } from "../../utils/helpers";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineMenuOpen } from "react-icons/md";
import SideMenu from "../SideMenu";
import { navLinks } from "../../utils/data";
import { MyWavyLink } from "../MyWavyLink";
import { Logo } from "../../assets";

const Navbar = () => {
  const navigate = useNavigate();
  const isNavActive = useIsNavActive();
  const { isDesktop, isMobile } = useCustomMediaQuery();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <MainContainer w="100%" bgColor={"white"} align="center" boxShadow={"lg"}>
      <Flex justify={"space-between"} align="center" w="100%">
        <Image
          src={Logo}
          alt="The apostolic church logo"
          cursor={"pointer"}
          onClick={() => navigate("/")}
          h={["40px", "60px", "60px", "50px"]}
          w={["30%", "40%", "20%", "10%"]}
        />

        {!isDesktop && (
          <>
            <UnorderedList
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              gap={4}
              ml="0"
            >
              {navLinks.slice(0, 1).map((el, idx) => (
                <Box
                  p={2}
                  key={idx}
                  m="0 10px"
                  height="100%"
                  borderBottom={isNavActive(el.route) ? "4px solid tomato" : ""}
                  // textUnderlineOffset={isNavActive(el.route) ? "-16px" : "0"}
                  // textDecoration={isNavActive(el.route) ? "underline" : "none"}
                >
                  <MyWavyLink to={el.route}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize={"16px"} fontWeight={"600"}>
                        {el.label}
                      </Text>
                    </Box>
                  </MyWavyLink>
                </Box>
              ))}
              <Menu closeOnSelect isLazy>
                <MenuButton
                  as={Button}
                  display="flex"
                  bgColor={"transparent"}
                  color="pryColor"
                  rightIcon={<BiChevronDown />}
                  fontSize={"16px"}
                  fontWeight={"600"}
                  _hover={{}}
                  h="36px"
                >
                  <Text>About</Text>
                </MenuButton>

                <MenuList
                  bgColor={useColorModeValue(
                    "lightMode.navBgColor",
                    "darkMode.secBgColor"
                  )}
                  px="4"
                  display={"flex"}
                  flexDirection="column"
                  alignItems={"flex-start"}
                  gap={2}
                >
                  {navLinks.slice(1, 4).map((el, idx) => (
                    <MenuItem
                      key={idx}
                      // m="auto"
                      ml="0px"
                      height="100%"
                      _focus={{
                        bgColor: "inherit",
                      }}
                      as={MyWavyLink}
                      to={el.route}
                      w="100%"
                    >
                      <Text
                        w="100%"
                        // ml="5px"
                        color="inherit"
                        borderRadius="4px"
                        bgColor={isNavActive(el.route) ? "tomato" : "none"}
                        _hover={{
                          bgColor: "tomato",
                          color: "white",
                        }}
                        p="2"
                      >
                        {el.label}
                      </Text>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              {navLinks.slice(4).map((el, idx) => (
                <Box
                  p={2}
                  key={idx}
                  m="0 10px"
                  height="100%"
                  borderBottom={isNavActive(el.route) ? "4px solid tomato" : ""}
                >
                  <MyWavyLink to={el.route}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize={"16px"} fontWeight={"600"}>
                        {el.label}
                      </Text>
                    </Box>
                  </MyWavyLink>
                </Box>
              ))}
            </UnorderedList>
            <Flex>
              <Button
                w="150px"
                fontSize={"16px"}
                fontWeight={"600"}
                borderRadius="full"
                onClick={() => navigate("/giving")}
              >
                GIVE
              </Button>
            </Flex>
          </>
        )}
      </Flex>
      {isDesktop && (
        <MdOutlineMenuOpen
          size={"36"}
          onClick={() => setIsSideMenuOpen(true)}
        />
      )}
      {isMobile && (
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => {
            setIsSideMenuOpen(false);
          }}
        />
      )}
    </MainContainer>
  );
};

export default Navbar;
