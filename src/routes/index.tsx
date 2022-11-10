import { Box } from "@chakra-ui/react";
import React from "react";
import { useRoutes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PublicRoutes } from "./routes";

const PublicPages = () => useRoutes(PublicRoutes);

export const Pages = () => {
  return (
    <>
      <Navbar />
      <PublicPages />
      <Footer />
    </>
  );
};
