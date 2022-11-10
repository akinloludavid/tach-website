import React from "react";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

export const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <Icon
      as={BsChevronDoubleRight}
      fontSize="48"
      // sx={{ ...style, display: "block" }}
      onClick={onClick}
      cursor="pointer"
      color="#fff"
      position="absolute"
      top={"50vh"}
      right="40px"
    />
  );
};

export const PrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <Icon
      fontSize="48"
      as={BsChevronDoubleLeft}
      // sx={{ ...style, display: "block" }}
      onClick={onClick}
      position="absolute"
      top="50vh"
      zIndex={999999}
      cursor="pointer"
      color="#fff"
      left="40px"
    />
  );
};
