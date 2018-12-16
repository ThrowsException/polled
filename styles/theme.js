import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import { lighten } from "polished";

export default {
  colors: {
    text: "#333",
    lightText: lighten(0.3, "#333"),
    border: "#EAE9EA",
    primary: "#5D37CD",
    green: {
      base: "rgb(60, 140, 135)"
    }
  },
  fonts: {
    brand: `'Cabin', sans-serif`,
    weights: {
      regular: 500,
      semiBold: 600
    }
  }
};

export const Globals = createGlobalStyle`
    ${fonts};
    * {
        box-sizing: border-box;
        font-color: ${p => p.theme.colors.text};
        font-family: -apple-system, "Segoe UI", Roboto, Helvetica, sans-serif;
    }
    
`;
