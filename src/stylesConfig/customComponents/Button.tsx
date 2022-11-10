export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: "none",
    _focus: { boxShadow: "none" },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: any) => ({
      bg: "#F27754",
      fontSize: "12px",
      borderRadius: "3px",
      lineHeight: "15px",
      fontWeight: "600",
      color: "#f3f3f3",
      _hover: {
        bgColor: "",
        boxShadow: "md",
        color: "#fff",
        _disabled: {
          bg: "gray",
          color: "#fff",
        },
      },
      _disabled: {
        backgroundColor: "#E5E5E5",
        color: "#3e3e3e",
      },
      textTransform: "uppercase",
    }),
    secondary: () => ({
      bg: "transparent",
      border: "1px solid #094063",
      color: "#094063",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: "700",
      _hover: {
        bg: "#E5EBF5",
        boxShadow: "md",
        outline: "none",
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
