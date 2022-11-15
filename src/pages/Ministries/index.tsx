import React from "react";
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import MainContainer from "../../components/MainContainer";
import { ourMinistries } from "../../utils/data";

const Ministries = () => {
  return (
    <MainContainer flexDir={"column"} py="96px" bgColor="#f0f0f0">
      <Heading textAlign={"center"} mb="8">
        OUR MINISTRIES
      </Heading>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(6,1fr)"]}
        gap={[4, 8]}
      >
        {ourMinistries.map((item) => (
          <GridItem colSpan={[2]}>
            <Box
              bgColor={"white"}
              borderRadius={"6px"}
              border="1px solid #dfe4ea"
              p={["24px", "32px"]}
            >
              <Image src={item.image} />
              <Heading fontSize={"28px"} my="4" fontWeight={"500"}>
                {item.title}
              </Heading>
              <Text>{item.body}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </MainContainer>
  );
};

export default Ministries;
