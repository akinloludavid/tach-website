import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import MainContainer from "../../components/MainContainer";
import { ourMinistries, ourMinistriesPage } from "../../utils/data";

const Ministries = () => {
  return (
    <>
      <MainContainer>
        <Heading textAlign={"center"}>OUR MINISTRIES</Heading>
      </MainContainer>

      <MainContainer flexDir={"column"} py="96px" bgColor="#f0f0f0">
        {ourMinistriesPage.map((item, idx) => (
          <Flex
            flexDir={[
              idx % 2 === 0 ? "column" : "column",
              idx % 2 === 0 ? "row" : "row-reverse",
            ]}
            align="center"
            p={["8px", "24px", "32px", "48px"]}
            gap={[4, 8]}
            mb={["24px", 0]}
          >
            <Image
              width={["100%", "50%"]}
              src={item.image}
              borderRadius="8px"
            />
            <Box w={["100%", "50%"]}>
              <Heading fontSize={"28px"} my="4" fontWeight={"500"}>
                {item.title}
              </Heading>
              <Text w={["100%", "80%"]}>{item.body}</Text>
            </Box>
          </Flex>
        ))}
      </MainContainer>
    </>
  );
};

export default Ministries;
