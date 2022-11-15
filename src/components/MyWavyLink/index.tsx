import { Link } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { WavyLink } from "react-wavy-transitions";

type Props = {
  to: string;
  children: ReactNode;
};

export const MyWavyLink: FC<Props> = ({ to, children }) => (
  <WavyLink duration={1000} direction="up" color="#c23616" to={to}>
    {children}
  </WavyLink>
);
