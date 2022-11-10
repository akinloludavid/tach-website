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
import HomepageCarousel from "../../components/Carousels/HomepageCarousel";
import MainContainer from "../../components/MainContainer";
import { Baby, Man, Mission, Vision, Woman } from "../../assets";
const HomePage = () => {
  return (
    <Box>
      <HomepageCarousel />
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
            borderRadius={"32px"}
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
        bgColor="#2f3542"
        color={"white"}
        py={["96px"]}
      >
        <Heading textAlign={"center"} color={"white"} mb="8" fontSize={"32px"}>
          OUR MISSION AND VISION
        </Heading>

        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)"]}
          gap={[4, 8]}
        >
          <Box
            bgColor={"white"}
            boxShadow="md"
            borderRadius={"6px"}
            p={["24px", "32px", "48px"]}
          >
            <Image src={Mission} />
            <Heading my="4" fontSize={"28px"}>
              OUR MISSION STATEMENT
            </Heading>
            <Text>
              The main object of the Church shall be to teach and preach the
              Gospel of our Lord Jesus Christ, and continue steadfastly in the
              Apostles' doctrine, Breaking of Bread, Fellowship and Prayers.
            </Text>
          </Box>
          <Box
            bgColor={"white"}
            boxShadow="md"
            borderRadius={"6px"}
            p={["24px", "32px", "48px"]}
          >
            <Image src={Vision} />

            <Heading my="4" fontSize={"28px"}>
              OUR VISION STATEMENT
            </Heading>
            <Text>
              Our vision is to equip leaders and members and provide resources
              to develop self-sufficient holistic
            </Text>
          </Box>
        </Grid>
      </MainContainer>

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
                The purpose of the men's unit is to build strong leaders in
                faith. Men who are dedicated to God and His work
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
                We are that generation that seek The Lord our God. We are women
                of virtue and it is our mission to help women grow
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
                "Train up a child in the way he should go: and when he is old,
                he will not depart from it." - Proverbs 22:6. This is our
                mission
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </MainContainer>
    </Box>
  );
};

export default HomePage;
