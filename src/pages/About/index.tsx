import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import MainContainer from "../../components/MainContainer";
import { churchAdmin, doctrines } from "../../utils/data";
import Card from "../../components/Card";
import { MdFactCheck } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

const AboutPage = () => {
  return (
    <>
      <MainContainer>
        <Heading fontSize={"48px"} fontWeight={"semibold"}>
          About Us
        </Heading>
      </MainContainer>
      <MainContainer
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        // px="16"
        py="96px"
        gap={8}
        bgColor="#f0f0f0"
      >
        <Box>
          <Image
            borderRadius={"8px"}
            src={
              "https://images.unsplash.com/photo-1536093058105-e4d1e0c5e525?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2h1cmNoJTIwZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            }
          />
        </Box>
        <Box w={["100%", "100%", "50%"]}>
          <Heading mb="40px">WHO WE ARE</Heading>

          <Text fontSize={"18px"} lineHeight="40px">
            We are a Bible-believing church committed to bringing the good news
            of Jesus Christ as savior and Lord to all people. We are dedicated
            to using the power of the Holy Spirit to set free those in spiritual
            bondage. We are committed to the growth and progress of the Gospel
            of our Lord Jesus Christ and we are on a mission to help people
            around the world accomplish God's purpose for their lives
          </Text>
        </Box>
      </MainContainer>
      <MainContainer
        flexDirection={"column"}
        bgRepeat="no-repeat"
        bgColor={"rgba(255,255,255,0.6)"}
        backgroundBlendMode="lighten"
        bgPosition={["center", "right"]}
        backgroundSize="cover"
        bgImage={`url(https://images.unsplash.com/photo-1457139621581-298d1801c832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNocmlzdGlhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)`}
      >
        <Box py="48px">
          <Heading mb="4">DOCTRINE AND BELIEF</Heading>
          <Flex flexDir={"column"} gap={4}>
            {doctrines.map((el, idx) => (
              <Text key={idx} w={["100%", "70%"]}>
                <Text as="span" mr="2" fontWeight={"semibold"}>
                  {idx + 1}.
                </Text>
                {el}
              </Text>
            ))}
          </Flex>
        </Box>
      </MainContainer>
      <MainContainer py="48px" flexDir={"column"} bgColor="#f0f0f0">
        <Heading mb="4">CHURCH ADMINISTRATION</Heading>

        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}
          gap={4}
        >
          {churchAdmin.map((admin) => (
            <GridItem key={admin.email}>
              <Card {...admin} />
            </GridItem>
          ))}
        </Grid>
      </MainContainer>
    </>
  );
};

export default AboutPage;
