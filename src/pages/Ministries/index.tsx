import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../components/MainContainer";

const Ministries = () => {
  return (
    <MainContainer flexDir={"column"}>
      <Box>
        <Heading>MEN'S MOVEMENT</Heading>
        <Text>
          The purpose of the men's unit is to build strong leaders in faith. Men
          who are dedicated to God and His work…
        </Text>
      </Box>
      <Box>
        <Heading>WOMEN'S MOVEMENT</Heading>
        <Text>
          We are that generation that seek The Lord our God. We are women of
          virtue and it is our mission to help women grow…
        </Text>
      </Box>
      <Box>
        <Heading>CHILDREN'S MOVEMENT</Heading>
        <Text>
          Train up a child in the way he should go: and when he is old, he will
          not depart from it” – Proverbs 22:6. This is our mission…
        </Text>
      </Box>
    </MainContainer>
  );
};

export default Ministries;
