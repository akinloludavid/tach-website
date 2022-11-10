import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import MainContainer from "../MainContainer";
import { Link, useNavigate } from "react-router-dom";
import { useCustomMediaQuery, useIsNavActive } from "../../utils/helpers";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineMenuOpen } from "react-icons/md";
import SideMenu from "../SideMenu";
import { navLinks } from "../../utils/data";

const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isNavActive = useIsNavActive();
  const { isDesktop } = useCustomMediaQuery();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <MainContainer bgColor={"white"} align="center" boxShadow={"lg"}>
      <Flex justify={"space-between"} w="full">
        <Flex>
          <Heading as="h1" cursor={"pointer"} onClick={() => navigate("/")}>
            Logo
          </Heading>
        </Flex>

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
                  <Link to={el.route}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize={"16px"} fontWeight={"600"}>
                        {el.label}
                      </Text>
                    </Box>
                  </Link>
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
                  About
                </MenuButton>

                <MenuList
                  bgColor={useColorModeValue(
                    "lightMode.navBgColor",
                    "darkMode.secBgColor"
                  )}
                  px="4"
                >
                  {navLinks.slice(1, 4).map((el, idx) => (
                    <MenuItem
                      w="100%"
                      key={idx}
                      m="auto"
                      height="100%"
                      borderRadius="4px"
                      _focus={{
                        bgColor: "inherit",
                      }}
                      bgColor={isNavActive(el.route) ? "tomato" : "none"}
                      _hover={{
                        bgColor: "tomato",
                        color: "white",
                      }}
                      as={Link}
                      to={el.route}
                    >
                      <Text ml="5px" color="inherit">
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
                  <Link to={el.route}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize={"16px"} fontWeight={"600"}>
                        {el.label}
                      </Text>
                    </Box>
                  </Link>
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
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => {
          setIsSideMenuOpen(false);
        }}
      />
    </MainContainer>
  );
};

export default Navbar;
