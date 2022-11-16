import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link as CLink,
  DrawerBody,
  DrawerFooter,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../utils/data";
import { useIsNavActive } from "../../utils/helpers";
import { MyWavyLink } from "../MyWavyLink";
import { AnimatedText } from "../Animations";
import { Logo } from "../../assets";

interface ISideMenu {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu = ({ isOpen, onClose }: ISideMenu) => {
  const navigate = useNavigate();
  const isNavActive = useIsNavActive();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bgColor={"rgb(0,0,0,0.1"} />
        <DrawerContent p={4}>
          <DrawerCloseButton />
          <Image
            src={Logo}
            alt="The apostolic church logo"
            cursor={"pointer"}
            onClick={() => navigate("/")}
            h={["40px", "40px", "auto"]}
            w={["40%"]}
          />

          <DrawerBody mt="4" onClick={onClose}>
            <Flex flexDirection={"column"} align="flex-start" gap={2}>
              {navLinks.map((link, idx) => (
                <AnimatedText delay={0.1 * (idx + 1)} key={idx}>
                  <CLink as={MyWavyLink} w="fit-content" to={link.route}>
                    <Text
                      borderBottom={
                        isNavActive(link.route) ? "2px solid tomato" : ""
                      }
                    >
                      {link.label}
                    </Text>
                  </CLink>
                </AnimatedText>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              w="full"
              borderRadius="full"
              onClick={() => {
                navigate("/giving");
                onClose();
              }}
            >
              GIVE
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideMenu;
