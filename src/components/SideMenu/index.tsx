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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../utils/data";
import { useIsNavActive } from "../../utils/helpers";

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
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Heading as="h2">TASC</Heading>

          <DrawerBody mt="4" onClick={onClose}>
            <Flex flexDirection={"column"}>
              {navLinks.map((link, idx) => (
                <CLink
                  key={idx}
                  as={Link}
                  borderBottom={
                    isNavActive(link.route) ? "2px solid tomato" : ""
                  }
                  w="fit-content"
                  to={link.route}
                  mb="2"
                >
                  {link.label}
                </CLink>
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
