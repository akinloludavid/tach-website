import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface ICard {
  url: string;
  name: string;
  position: string;
  email: string;
}
const Card = ({ url, name, position, email }: ICard) => {
  return (
    <Box w="100%" borderWidth={"1px"} p="0" rounded="lg">
      <Image
        w="100%"
        maxH={"250px"}
        src={url}
        alt=""
        borderRadius={"4px 4px 0 0"}
      />
      <Box
        p="6"
        roundedBottomLeft={"lg"}
        roundedBottomRight="lg"
        bg="transparent"
        borderRadius={"4px"}
      >
        <Flex justify={"space-between"} align={"center"} gap={4}>
          <Text fontWeight={"semibold"} fontSize="18px">
            Name:
          </Text>
          <Text fontSize="18px">{name}</Text>
        </Flex>
        <Flex justify={"space-between"} align={"center"} gap={4}>
          <Text fontWeight={"semibold"} fontSize="18px">
            Position:
          </Text>
          <Text fontSize="18px">{position}</Text>
        </Flex>
        <Flex justify={"space-between"} align={"center"} gap={4}>
          <Text fontWeight={"semibold"} fontSize="18px">
            Email:
          </Text>
          <Text as="a" href={`mailto:${email}`} fontSize="18px">
            {email}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
