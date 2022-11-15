import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import { customTheme } from "./stylesConfig/theme";
import { WavyContainer } from "react-wavy-transitions";

import "./index.css";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <WavyContainer />
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
      <Outlet />
    </BrowserRouter>
  </React.StrictMode>
);
