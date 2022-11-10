import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface ICard {
  url: string;
  name: string;
  position: string;
  email: string;
}
const Card = ({ url, name, position, email }: ICard) => {
  return (
    <Box w="100%" borderRadius={"4px"} p="2" border="1px solid gray">
      <Image
        w="100%"
        maxH={"250px"}
        src={url}
        alt=""
        borderRadius={"4px 4px 0 0"}
      />
      <Box>
        <Text>Name: {name}</Text>
        <Text>Postion: {position}</Text>
        <Text>Email: {email}</Text>
      </Box>
    </Box>
  );
};

export default Card;
