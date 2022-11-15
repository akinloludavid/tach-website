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
import { ourMinistries } from "../../utils/data";
import { AnimatedImg, AnimatedText } from "../../components/Animations";
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
        bgColor="light"
      >
        <Box>
          <AnimatedImg>
            <Image
              borderRadius={"8px"}
              src={
                "https://images.unsplash.com/photo-1536093058105-e4d1e0c5e525?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2h1cmNoJTIwZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              }
            />
          </AnimatedImg>
        </Box>
        <Box w={["100%", "100%", "50%"]}>
          <AnimatedText>
            <Heading mb="40px">WHO WE ARE</Heading>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <Text fontSize={"18px"} lineHeight="40px">
              We are a Bible-believing church committed to bringing the good
              news of Jesus Christ as savior and Lord to all people. We are
              dedicated to using the power of the Holy Spirit to set free those
              in spiritual bondage. We are committed to the growth and progress
              of the Gospel of our Lord Jesus Christ and we are on a mission to
              help people around the world accomplish God's purpose for their
              lives
            </Text>
          </AnimatedText>
        </Box>
      </MainContainer>
      <MainContainer
        flexDirection={"column"}
        bgColor="pryColor"
        color={"white"}
        py={["96px"]}
      >
        <AnimatedText>
          <Heading
            textAlign={"center"}
            color={"white"}
            mb="8"
            fontSize={"32px"}
          >
            OUR MISSION AND VISION
          </Heading>
        </AnimatedText>

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
            <AnimatedImg>
              <Image src={Mission} />
            </AnimatedImg>
            <AnimatedText>
              <Heading my="4" fontSize={"28px"}>
                OUR MISSION STATEMENT
              </Heading>
              <Text>
                The main object of the Church shall be to teach and preach the
                Gospel of our Lord Jesus Christ, and continue steadfastly in the
                Apostles' doctrine, Breaking of Bread, Fellowship and Prayers.
              </Text>
            </AnimatedText>
          </Box>
          <Box
            bgColor={"white"}
            boxShadow="md"
            borderRadius={"6px"}
            p={["24px", "32px", "48px"]}
          >
            <AnimatedImg>
              <Image src={Vision} />
            </AnimatedImg>
            <AnimatedText delay={0.4}>
              <Heading my="4" fontSize={"28px"}>
                OUR VISION STATEMENT
              </Heading>
              <Text>
                Our vision is to equip leaders and members and provide resources
                to develop self-sufficient holistic
              </Text>
            </AnimatedText>
          </Box>
        </Grid>
      </MainContainer>

      <MainContainer flexDir={"column"} py="96px" bgColor="#f0f0f0">
        <Heading textAlign={"center"} mb="8">
          OUR MINISTRIES
        </Heading>
        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(6,1fr)"]}
          gap={[4, 8]}
        >
          {ourMinistries.map((item, idx) => (
            <GridItem colSpan={[2]}>
              <AnimatedText delay={0.1 * (idx + 1)}>
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
              </AnimatedText>
            </GridItem>
          ))}
        </Grid>
      </MainContainer>
    </Box>
  );
};

export default HomePage;
