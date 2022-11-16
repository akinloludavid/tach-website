import React, { Suspense } from "react";
import { Box, CircularProgress } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100vh" }}
    >
      <CircularProgress isIndeterminate color="pryColor" />
    </Box>
  );
};

// eslint-disable-next-line react/display-name
const WithSuspense = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default WithSuspense;
