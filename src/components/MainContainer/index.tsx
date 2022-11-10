import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import { IChildren } from "../../utils/types";

interface IMainContainer extends FlexProps {
  children: React.ReactNode;
}
const MainContainer = ({ children, ...rest }: IMainContainer) => {
  return (
    <Flex px={["30px", "60px"]} py={["20px"]} {...rest}>
      {children}
    </Flex>
  );
};

export default MainContainer;
