import {dsStyles} from "@mono/ds/dsStyles.css";
import {style} from "@vanilla-extract/css";

// crashes when saving
export const myStyle = style([
  dsStyles.display.flex,
  {
    color: "red",
  },
]);
