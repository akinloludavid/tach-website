// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/components/input.ts

const primary = {
  field: {
    width: "100%",
    minWidth: 0,
    // outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    bg: "lightMode.inputBg",
    borderRadius: "3px",
    border: "1px solid #DFE1E6",
    h: "60px",
    fontSize: "lg",
    _placeholder: {
      color: "#7A869A",
      fontSize: "14px",
      fontWeight: "400",
    },
    _focus: {
      border: "2px solid #5299D3",
    },
  },
};
const secondary = {
  field: {
    width: "100%",
    minWidth: 0,
    // outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    bg: "#ffffff",
    borderRadius: "5px",
    border: "1px solid #DFE1E6",
    _placeholder: {
      color: "#6B778C",
      fontSize: "14px",
      fontWeight: "400",
    },
    _focus: {
      border: "2px solid #5299D3",
    },
  },
};
export const InputStyles = {
  variants: {
    primary,
    secondary,
  },
  defaultProps: {
    variant: "secondary",
  },
};
