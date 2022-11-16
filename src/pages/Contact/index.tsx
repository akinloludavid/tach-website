import React from "react";
import { Heading } from "@chakra-ui/react";
import MainContainer from "../../components/MainContainer";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <MainContainer>
        <Heading textAlign={"center"}>CONTACT US</Heading>
      </MainContainer>

      <MainContainer flexDirection={"column"}>
        <Heading fontSize={"24px"} fontWeight="500" as="h2" mb="24px">
          You can locate us on the map below
        </Heading>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3445387048105!2d3.38283821482229!3d6.477972825488007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b7c24a8f127%3A0xce2d482034b77d90!2sOloto%20St%2C%20Adekunle%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1668606776297!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MainContainer>
      <MainContainer bgColor={"light"} mt={0} px="0px" mx="auto">
        <ContactForm />
      </MainContainer>
    </>
  );
};

export default Contact;
