import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import MainContainer from "../../components/MainContainer";
import { churchAdmin, doctrines } from "../../utils/data";
import Card from "../../components/Card";

const AboutPage = () => {
  return (
    <MainContainer flexDirection={"column"}>
      <Heading>ABOUT TACSLA</Heading>
      <Text>
        We are a Bible-believing church committed to bringing the good news of
        Jesus Christ as savior and Lord to all people. We are dedicated to using
        the power of the Holy Spirit to set free those in spiritual bondage. We
        are committed to the growth and progress of the Gospel of our Lord Jesus
        Christ and we are on a mission to help people around the world
        accomplish God’s purpose for their lives.
      </Text>
      <Box>
        <Heading>DOCTRINE AND BELIEF</Heading>
        <UnorderedList>
          {doctrines.map((doc, idx) => (
            <ListItem key={idx}>
              <Text>{doc}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box>
        <Heading>CHURCH ADMINISTRATION</Heading>

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
      </Box>
    </MainContainer>
  );
};

export default AboutPage;
