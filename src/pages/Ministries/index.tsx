import React from "react";
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Man, Woman, Baby } from "../../assets";
import MainContainer from "../../components/MainContainer";

const Ministries = () => {
  return (
    <MainContainer flexDir={"column"} py="96px" bgColor="#f0f0f0">
      <Heading textAlign={"center"} mb="8">
        OUR MINISTRIES
      </Heading>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
        gap={[4, 8]}
      >
        <GridItem>
          <Box
            bgColor={"white"}
            borderRadius={"6px"}
            border="1px solid #dfe4ea"
            p={["24px", "32px"]}
          >
            <Image src={Man} />
            <Heading fontSize={"28px"} my="4">
              MEN'S MOVEMENT
            </Heading>
            <Text>
              The purpose of the men's unit is to build strong leaders in faith.
              Men who are dedicated to God and His work
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            bgColor={"white"}
            borderRadius={"6px"}
            border="1px solid #dfe4ea"
            p={["24px", "32px"]}
          >
            <Image src={Woman} />
            <Heading fontSize={"28px"} my="4">
              WOMEN'S MOVEMENT
            </Heading>
            <Text>
              We are that generation that seek The Lord our God. We are women of
              virtue and it is our mission to help women grow
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={[1, 2, 1]}>
          <Box
            w={["100%", "50%", "100%"]}
            mx="auto"
            bgColor={"white"}
            borderRadius={"6px"}
            border="1px solid #dfe4ea"
            p={["24px", "32px"]}
          >
            <Image src={Baby} />

            <Heading fontSize={"28px"} fontWeight="600" my="4">
              CHILDREN'S MOVEMENT
            </Heading>
            <Text>
              "Train up a child in the way he should go: and when he is old, he
              will not depart from it." - Proverbs 22:6. This is our mission
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </MainContainer>
  );
};

export default Ministries;
