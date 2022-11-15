import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PublicRoutes } from "./routes";

const PublicPages = () => useRoutes(PublicRoutes);

export const Pages = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Box display={"flex"} flexDirection="column" minH="100vh">
        <Navbar />
        <PublicPages />
        <Footer />
      </Box>
    </>
  );
};
