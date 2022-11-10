export const TextStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#094063",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    bodyText: {
      fontSize: "16px",
      // color: "#fff",
      fontWeight: "400",
    },
    footerText: {
      fontSize: "12px",
      color: "#fff",
      fontWeight: "400",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
