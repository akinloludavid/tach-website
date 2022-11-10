export const HeadingStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#094063",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    homeHeading: {
      color: "#FFFFFF",
      fontWeight: ["700", "700"],
      fontSize: ["50px", "70px", "70px"],
      lineHeight: ["61px", "85px"],
      fontStyle: "normal",
    },

    primary: {
      color: "#094063",
      fontSize: "32px",
      fontWeight: "600",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
