import { useMediaQuery } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const useIsNavActive = () => {
  const location = useLocation();
  return (str: string) => location.pathname.endsWith(str);
};

export const useCustomMediaQuery = () => {
  const [isPhone, isMobile, isDesktop] = useMediaQuery([
    "(max-width: 576px)",
    "(max-width: 768px)",
    "(max-width: 992px)",
  ]);
  return {
    isMobile,
    isPhone,
    isDesktop,
  };
};
