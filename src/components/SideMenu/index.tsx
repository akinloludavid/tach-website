import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../utils/data";

interface ISideMenu {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu = ({ isOpen, onClose }: ISideMenu) => {
  const navigate = useNavigate();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Heading as="h2">TASC</Heading>

          <DrawerBody mt="4">
            <Flex flexDirection={"column"}>
              {navLinks.map((el) => (
                <Link to={el.route}>{el.label}</Link>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              w="full"
              borderRadius="full"
              onClick={() => navigate("/giving")}
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
