import {dsStyles} from "@mono/ds/dsStyles.css";
import {style} from "@vanilla-extract/css";

export const myStyle = style([
  dsStyles.display.flex,
  {
    color: "red",
  },
]);
